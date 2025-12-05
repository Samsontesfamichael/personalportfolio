import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score, confusion_matrix, roc_curve
from dataset_loader import load_data
from anomaly_score import HybridIDS
from utils import plot_roc_curve, plot_anomaly_distribution, plot_feature_embeddings

def main():
    # 1. Load Data
    X_train, X_val, X_test, y_train, y_val, y_test, scaler = load_data()
    
    # Initialize IDS
    ids = HybridIDS()
    
    # 2. Fit Statistics (using only Normal traffic from training set)
    # Note: X_train is already scaled
    X_train_normal = X_train[y_train == 0]
    ids.fit_statistics(X_train_normal)
    
    # 3. Train Classifier (using all training data)
    ids.train_classifier(X_train, y_train)
    
    # 4. Optimize Weights (using validation set)
    ids.optimize_weights(X_val, y_val)
    
    # 5. Evaluate (using test set)
    print("Evaluating model...")
    scores = ids.calculate_hybrid_score(X_test)
    
    # Generate Plots
    plot_roc_curve(y_test, scores, save_path='../roc_curve.png')
    plot_anomaly_distribution(y_test, scores, save_path='../anomaly_distribution.png')
    plot_feature_embeddings(X_test, y_test, save_path='../feature_embeddings.png')
    
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
    
    print(f"\nResults at threshold {best_thresh:.4f}:")
    print(f"Accuracy: {acc:.4f}")
    print(f"Precision: {prec:.4f}")
    print(f"Recall: {rec:.4f}")
    
    # Confusion Matrix
    cm = confusion_matrix(y_test, y_pred)
    tn, fp, fn, tp = cm.ravel()
    fpr_val = fp / (fp + tn)
    print(f"False Positive Rate: {fpr_val:.4f}")

if __name__ == "__main__":
    main()
