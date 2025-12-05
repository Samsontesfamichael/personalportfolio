import numpy as np
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import roc_curve, auc, accuracy_score, precision_score, recall_score, confusion_matrix
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification
import seaborn as sns

# Set random seed for reproducibility
np.random.seed(42)

class HybridIDS:
    def __init__(self):
        self.mu = None
        self.cov_inv = None
        self.classifier = None
        self.scaler = StandardScaler()
        self.alpha = 0.5
        self.beta = 0.3
        self.gamma = 0.2
        self.threshold = 0.0

    def generate_synthetic_data(self, n_samples=5000, n_features=20):
        """
        Generate synthetic network traffic data.
        """
        print("Generating synthetic data...")
        X, y = make_classification(n_samples=n_samples, n_features=n_features, 
                                   n_informative=15, n_redundant=5, 
                                   n_clusters_per_class=2, weights=[0.9, 0.1], 
                                   flip_y=0.01, random_state=42)
        return X, y

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

    def get_classifier_loss(self, X, y):
        """
        Compute cross-entropy loss for samples.
        For binary classification, we can approximate 'loss' contribution 
        using the negative log probability of the true class.
        However, for anomaly scoring in test time (where we don't know y),
        we often use the uncertainty (entropy) or the probability of the 'normal' class 
        if we treat it as an outlier detection.
        
        In the thesis formulation: gamma * l(f(x), y).
        During inference/scoring, we typically use the model's confidence in the predicted class 
        or the distance from the decision boundary.
        
        Here, we will use the probability of the 'anomaly' class as a proxy for the 'loss' 
        contribution to the anomaly score, or 1 - prob(normal).
        """
        probs = self.classifier.predict_proba(X)
        # Assuming class 1 is anomaly, we use prob(anomaly) as the score component
        return probs[:, 1]

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
        # Note: In the thesis equation it says loss l(f(x), y), but for unlabelled inference
        # we use the model's predicted probability of anomaly.
        model_score = self.classifier.predict_proba(X)[:, 1]
        
        # Normalize terms to be on similar scales for the weighted sum
        d_euclidean = (d_euclidean - np.mean(d_euclidean)) / (np.std(d_euclidean) + 1e-8)
        d_mahalanobis = (d_mahalanobis - np.mean(d_mahalanobis)) / (np.std(d_mahalanobis) + 1e-8)
        # model_score is already 0-1, but let's standardize it too for consistency
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

    def evaluate(self, X_test, y_test):
        """
        Evaluate the model and generate plots.
        """
        print("Evaluating model...")
        scores = self.calculate_hybrid_score(X_test)
        
        # ROC Curve
        fpr, tpr, thresholds = roc_curve(y_test, scores)
        roc_auc = auc(fpr, tpr)
        
        plt.figure(figsize=(8, 6))
        plt.plot(fpr, tpr, color='darkorange', lw=2, label=f'ROC curve (area = {roc_auc:.2f})')
        plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
        plt.xlim([0.0, 1.0])
        plt.ylim([0.0, 1.05])
        plt.xlabel('False Positive Rate')
        plt.ylabel('True Positive Rate')
        plt.title('Receiver Operating Characteristic (ROC)')
        plt.legend(loc="lower right")
        plt.grid(True)
        plt.savefig('roc_curve.png')
        print("Saved roc_curve.png")
        
        # Anomaly Score Distribution
        plt.figure(figsize=(8, 6))
        sns.histplot(scores[y_test == 0], color='green', label='Normal', kde=True, stat="density", alpha=0.5)
        sns.histplot(scores[y_test == 1], color='red', label='Anomaly', kde=True, stat="density", alpha=0.5)
        plt.title('Distribution of Hybrid Anomaly Scores')
        plt.xlabel('Anomaly Score')
        plt.ylabel('Density')
        plt.legend()
        plt.grid(True)
        plt.savefig('anomaly_distribution.png')
        print("Saved anomaly_distribution.png")

        # Feature Embeddings (PCA for visualization)
        from sklearn.decomposition import PCA
        pca = PCA(n_components=2)
        X_pca = pca.fit_transform(X_test)
        
        plt.figure(figsize=(8, 6))
        plt.scatter(X_pca[y_test == 0, 0], X_pca[y_test == 0, 1], c='green', label='Normal', alpha=0.5, s=10)
        plt.scatter(X_pca[y_test == 1, 0], X_pca[y_test == 1, 1], c='red', label='Anomaly', alpha=0.5, s=10)
        plt.title('2D Feature Embeddings (PCA)')
        plt.xlabel('Principal Component 1')
        plt.ylabel('Principal Component 2')
        plt.legend()
        plt.grid(True)
        plt.savefig('feature_embeddings.png')
        print("Saved feature_embeddings.png")
        
        # Metrics at best threshold
        # Find optimal threshold (Youden's J statistic)
        J = tpr - fpr
        ix = np.argmax(J)
        best_thresh = thresholds[ix]
        self.threshold = best_thresh
        
        y_pred = (scores > best_thresh).astype(int)
        acc = accuracy_score(y_test, y_pred)
        prec = precision_score(y_test, y_pred)
        rec = recall_score(y_test, y_pred)
        
        print(f"\nResults at threshold {best_thresh:.4f}:")
        print(f"Accuracy: {acc:.4f}")
        print(f"Precision: {prec:.4f}")
        print(f"Recall: {rec:.4f}")
        
        # Confusion Matrix
        cm = confusion_matrix(y_test, y_pred)
        tn, fp, fn, tp = cm.ravel()
        fpr_val = fp / (fp + tn)
        print(f"False Positive Rate: {fpr_val:.4f}")

def main():
    # Initialize IDS
    ids = HybridIDS()
    
    # 1. Generate Data
    X, y = ids.generate_synthetic_data(n_samples=10000, n_features=20)
    
    # Split: Train (60%), Val (20%), Test (20%)
    X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.4, random_state=42)
    X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42)
    
    # Scale Data
    X_train = ids.scaler.fit_transform(X_train)
    X_val = ids.scaler.transform(X_val)
    X_test = ids.scaler.transform(X_test)
    
    # 2. Fit Statistics (using only Normal traffic from training set)
    X_train_normal = X_train[y_train == 0]
    ids.fit_statistics(X_train_normal)
    
    # 3. Train Classifier (using all training data)
    ids.train_classifier(X_train, y_train)
    
    # 4. Optimize Weights (using validation set)
    ids.optimize_weights(X_val, y_val)
    
    # 5. Evaluate (using test set)
    ids.evaluate(X_test, y_test)

if __name__ == "__main__":
    main()
