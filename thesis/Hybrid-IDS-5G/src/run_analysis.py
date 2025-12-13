import numpy as np
import os
from sklearn.metrics import accuracy_score, precision_score, recall_score, confusion_matrix, roc_curve
from dataset_loader import load_data, get_nsl_kdd_feature_names
from anomaly_score import HybridIDS
from utils import plot_roc_curve, plot_anomaly_distribution, plot_feature_embeddings
from typing import Optional

def main(output_dir: str = '../results') -> None:
    """
    Main execution pipeline for training and evaluating the Hybrid IDS.
    
    Steps:
    1. Load Dataset (Synthetic or Real)
    2. Fit Statistical Models (Mean, Covariance) on Normal traffic
    3. Train MLP Classifier on labeled data
    4. Optimize Hybrid Score Weights (Alpha, Beta, Gamma)
    5. Evaluate on Test Set and generate plots
    
    Args:
        output_dir (str): Directory to save resulting plots.
    """
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # 1. Load Data
    print("Loading Dataset...")
    features = get_nsl_kdd_feature_names()
    print(f"Simulating NSL-KDD dataset with {len(features)} features:")
    print(features)
    
    X_train, X_val, X_test, y_train, y_val, y_test, scaler = load_data(n_features=len(features))
    
    # Initialize IDS
    ids = HybridIDS()
    
    # 2. Fit Statistics (using only Normal traffic from training set)
    # Note: X_train is already scaled
    print("\n--- Phase 1: Statistical Modeling ---")
    X_train_normal = X_train[y_train == 0]
    ids.fit_statistics(X_train_normal)
    
    # 3. Train Classifier (using all training data)
    print("\n--- Phase 2: Neural Network Training ---")
    ids.train_classifier(X_train, y_train)
    
    # 4. Optimize Weights (using validation set)
    print("\n--- Phase 3: Hybrid Weight Optimization ---")
    ids.optimize_weights(X_val, y_val)
    
    # 5. Evaluate (using test set)
    print("\n--- Phase 4: Final Evaluation ---")
    scores = ids.calculate_hybrid_score(X_test)
    
    # Generate Plots
    print(f"Saving plots to {output_dir}...")
    plot_roc_curve(y_test, scores, save_path=os.path.join(output_dir, 'roc_curve.png'))
    plot_anomaly_distribution(y_test, scores, save_path=os.path.join(output_dir, 'anomaly_distribution.png'))
    plot_feature_embeddings(X_test, y_test, save_path=os.path.join(output_dir, 'feature_embeddings.png'))
    
    # Metrics at best threshold (Youden's J statistic)
    fpr, tpr, thresholds = roc_curve(y_test, scores)
    J = tpr - fpr
    ix = np.argmax(J)
    best_thresh = thresholds[ix]
    ids.threshold = best_thresh
    
    y_pred = (scores > best_thresh).astype(int)
    acc = accuracy_score(y_test, y_pred)
    prec = precision_score(y_test, y_pred)
    rec = recall_score(y_test, y_pred)
    
    print(f"\nResults at optimal threshold {best_thresh:.4f}:")
    print(f"Accuracy:  {acc:.4f}")
    print(f"Precision: {prec:.4f}")
    print(f"Recall:    {rec:.4f}")
    
    # Confusion Matrix
    cm = confusion_matrix(y_test, y_pred)
    tn, fp, fn, tp = cm.ravel()
    fpr_val = fp / (fp + tn) if (fp + tn) > 0 else 0.0
    print(f"False Positive Rate: {fpr_val:.4f}")

if __name__ == "__main__":
    # Adjust path if running from src directory
    main(output_dir='../')
