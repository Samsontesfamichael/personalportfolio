import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import roc_curve, auc
from typing import Tuple, List, Optional
import itertools

class HybridIDS:
    """
    Hybrid Intrusion Detection System (IDS) combining statistical feature embeddings
    and a neural network classifier.
    
    The anomaly score is defined as:
    S(x) = alpha * ||x - mu||_2  (Euclidean Distance)
         + beta * (x - mu)^T * Sigma^-1 * (x - mu) (Mahalanobis Distance)
         + gamma * Loss(f(x), y) (Model Uncertainty)
    """
    
    def __init__(self):
        self.mu: Optional[np.ndarray] = None
        self.cov_inv: Optional[np.ndarray] = None
        self.classifier: Optional[MLPClassifier] = None
        self.alpha: float = 0.5
        self.beta: float = 0.3
        self.gamma: float = 0.2
        self.threshold: float = 0.0

    def fit_statistics(self, X_normal: np.ndarray) -> None:
        """
        Compute mean and inverse covariance of normal traffic for statistical distance measures.
        
        Args:
            X_normal (np.ndarray): Training data containing only normal traffic samples.
        """
        print("Fitting statistical model on normal traffic...")
        self.mu = np.mean(X_normal, axis=0)
        cov = np.cov(X_normal, rowvar=False)
        
        # Add small regularization to ensure invertibility (Ridge regularization)
        # This prevents singular matrix errors if features are highly correlated
        cov += np.eye(cov.shape[0]) * 1e-6
        self.cov_inv = np.linalg.inv(cov)

    def mahalanobis_distance(self, x: np.ndarray) -> np.ndarray:
        """
        Compute Mahalanobis distance for a single sample or batch.
        D_M(x) = sqrt((x - mu)^T * Sigma^-1 * (x - mu))
        
        Args:
            x (np.ndarray): Input samples.
            
        Returns:
            np.ndarray: Mahalanobis distances.
        """
        if self.mu is None or self.cov_inv is None:
            raise ValueError("Statistical model not fitted. Call fit_statistics() first.")
            
        delta = x - self.mu
        
        if x.ndim == 1:
            return np.sqrt(np.dot(np.dot(delta.T, self.cov_inv), delta))
        else:
            # Efficient implementation for batch computation:
            # sum( (delta * cov_inv) . delta ) along axis 1
            # (N, D) @ (D, D) -> (N, D)
            m = np.dot(delta, self.cov_inv)
            # Element-wise multiply and sum row-wise is equivalent to diagonal of the full matrix product
            return np.sqrt(np.sum(m * delta, axis=1))

    def train_classifier(self, X_train: np.ndarray, y_train: np.ndarray) -> None:
        """
        Train the MLP classifier.
        
        Args:
            X_train (np.ndarray): Training features.
            y_train (np.ndarray): Training labels.
        """
        print("Training MLP classifier...")
        # Using a deeper network for better pattern recognition
        self.classifier = MLPClassifier(hidden_layer_sizes=(64, 32), max_iter=500, random_state=42)
        self.classifier.fit(X_train, y_train)

    def calculate_hybrid_score(self, X: np.ndarray) -> np.ndarray:
        """
        Calculate the hybrid anomaly score S(x).
        
        S(x) = alpha * normalized(Euclidean) + beta * normalized(Mahalanobis) + gamma * normalized(ModelScore)
        
        Normalization is crucial because the three components have vastly different scales.
        
        Args:
            X (np.ndarray): Input samples.
            
        Returns:
            np.ndarray: Calculated anomaly scores.
        """
        if self.classifier is None:
             raise ValueError("Classifier not trained. Call train_classifier() first.")

        # 1. Euclidean Distance from mean
        # Measures magnitude of deviation
        d_euclidean = np.linalg.norm(X - self.mu, axis=1)
        
        # 2. Mahalanobis Distance
        # Measures deviation accounting for correlation structure
        d_mahalanobis = self.mahalanobis_distance(X)
        
        # 3. Model Confidence (Probability of being anomaly)
        # We use P(y=1|x) as a proxy for 'suspiciousness' or 'loss-like' signal
        # Ideally this would be the actual loss value, but probability is monotonic with loss
        model_score = self.classifier.predict_proba(X)[:, 1]
        
        # Normalize terms to Z-scores (robust scaling) to be on similar scales
        # Adding epsilon to avoid division by zero
        eps = 1e-8
        d_euclidean = (d_euclidean - np.mean(d_euclidean)) / (np.std(d_euclidean) + eps)
        d_mahalanobis = (d_mahalanobis - np.mean(d_mahalanobis)) / (np.std(d_mahalanobis) + eps)
        model_score = (model_score - np.mean(model_score)) / (np.std(model_score) + eps)

        scores = (self.alpha * d_euclidean) + (self.beta * d_mahalanobis) + (self.gamma * model_score)
        return scores

    def optimize_weights(self, X_val: np.ndarray, y_val: np.ndarray) -> None:
        """
        Grid search to find optimal weights alpha, beta, gamma that maximize AUC on validation set.
        
        Args:
            X_val (np.ndarray): Validation features.
            y_val (np.ndarray): Validation labels.
        """
        print("Optimizing weights via Grid Search...")
        best_auc = 0.0
        best_weights = (0.33, 0.33, 0.33)
        
        # Define grid search space
        grid = [0.1, 0.3, 0.5, 0.7, 0.9]
        
        # 1. Precompute components to avoid recomputing in loop (Optimization)
        d_e = np.linalg.norm(X_val - self.mu, axis=1)
        d_m = self.mahalanobis_distance(X_val)
        m_s = self.classifier.predict_proba(X_val)[:, 1]
        
        # Normalize
        eps = 1e-8
        d_e = (d_e - np.mean(d_e)) / (np.std(d_e) + eps)
        d_m = (d_m - np.mean(d_m)) / (np.std(d_m) + eps)
        m_s = (m_s - np.mean(m_s)) / (np.std(m_s) + eps)

        # 2. Iterate through all combinations
        # using itertools.product for cleaner nested loop logic
        for a, b, g in itertools.product(grid, repeat=3):
            # Calculate score
            s = a * d_e + b * d_m + g * m_s
            
            # Compute AUC
            fpr, tpr, _ = roc_curve(y_val, s)
            score_auc = auc(fpr, tpr)
            
            if score_auc > best_auc:
                best_auc = score_auc
                best_weights = (a, b, g)
        
        self.alpha, self.beta, self.gamma = best_weights
        print(f"Optimal weights found: alpha={self.alpha}, beta={self.beta}, gamma={self.gamma} (Best AUC: {best_auc:.4f})")
