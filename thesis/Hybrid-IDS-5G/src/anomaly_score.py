import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import roc_curve, auc

class HybridIDS:
    def __init__(self):
        self.mu = None
        self.cov_inv = None
        self.classifier = None
        self.alpha = 0.5
        self.beta = 0.3
        self.gamma = 0.2
        self.threshold = 0.0

    def fit_statistics(self, X_normal):
        """
        Compute mean and inverse covariance of normal traffic.
        """
        print("Fitting statistical model on normal traffic...")
        self.mu = np.mean(X_normal, axis=0)
        cov = np.cov(X_normal, rowvar=False)
        # Add small regularization to ensure invertibility
        cov += np.eye(cov.shape[0]) * 1e-6
        self.cov_inv = np.linalg.inv(cov)

    def mahalanobis_distance(self, x):
        """
        Compute Mahalanobis distance for a single sample or batch.
        """
        delta = x - self.mu
        if x.ndim == 1:
            return np.sqrt(np.dot(np.dot(delta.T, self.cov_inv), delta))
        else:
            # Batch computation
            m = np.dot(delta, self.cov_inv)
            return np.sqrt(np.sum(m * delta, axis=1))

    def train_classifier(self, X_train, y_train):
        """
        Train the MLP classifier.
        """
        print("Training MLP classifier...")
        self.classifier = MLPClassifier(hidden_layer_sizes=(64, 32), max_iter=500, random_state=42)
        self.classifier.fit(X_train, y_train)

    def calculate_hybrid_score(self, X):
        """
        Calculate the hybrid anomaly score S(x).
        S(x) = alpha * Euclidean + beta * Mahalanobis + gamma * ModelConfidence
        """
        # 1. Euclidean Distance from mean
        d_euclidean = np.linalg.norm(X - self.mu, axis=1)
        
        # 2. Mahalanobis Distance
        d_mahalanobis = self.mahalanobis_distance(X)
        
        # 3. Model Confidence (Probability of being anomaly)
        model_score = self.classifier.predict_proba(X)[:, 1]
        
        # Normalize terms to be on similar scales for the weighted sum
        d_euclidean = (d_euclidean - np.mean(d_euclidean)) / (np.std(d_euclidean) + 1e-8)
        d_mahalanobis = (d_mahalanobis - np.mean(d_mahalanobis)) / (np.std(d_mahalanobis) + 1e-8)
        model_score = (model_score - np.mean(model_score)) / (np.std(model_score) + 1e-8)

        scores = (self.alpha * d_euclidean) + (self.beta * d_mahalanobis) + (self.gamma * model_score)
        return scores

    def optimize_weights(self, X_val, y_val):
        """
        Simple grid search to find optimal weights alpha, beta, gamma.
        """
        print("Optimizing weights...")
        best_auc = 0
        best_weights = (0.33, 0.33, 0.33)
        
        # Grid search space
        grid = [0.1, 0.3, 0.5, 0.7, 0.9]
        
        # 1. Precompute components
        d_e = np.linalg.norm(X_val - self.mu, axis=1)
        d_m = self.mahalanobis_distance(X_val)
        m_s = self.classifier.predict_proba(X_val)[:, 1]
        
        # Normalize
        d_e = (d_e - np.mean(d_e)) / (np.std(d_e) + 1e-8)
        d_m = (d_m - np.mean(d_m)) / (np.std(d_m) + 1e-8)
        m_s = (m_s - np.mean(m_s)) / (np.std(m_s) + 1e-8)

        for a in grid:
            for b in grid:
                for g in grid:
                    # Calculate score
                    s = a * d_e + b * d_m + g * m_s
                    fpr, tpr, _ = roc_curve(y_val, s)
                    score_auc = auc(fpr, tpr)
                    
                    if score_auc > best_auc:
                        best_auc = score_auc
                        best_weights = (a, b, g)
        
        self.alpha, self.beta, self.gamma = best_weights
        print(f"Optimal weights found: alpha={self.alpha}, beta={self.beta}, gamma={self.gamma}")
