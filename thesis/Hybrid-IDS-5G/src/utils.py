import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import roc_curve, auc

def plot_roc_curve(y_test, scores, save_path='roc_curve.png'):
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
    plt.savefig(save_path)
    print(f"Saved {save_path}")
    plt.close()

def plot_anomaly_distribution(y_test, scores, save_path='anomaly_distribution.png'):
    plt.figure(figsize=(8, 6))
    sns.histplot(scores[y_test == 0], color='green', label='Normal', kde=True, stat="density", alpha=0.5)
    sns.histplot(scores[y_test == 1], color='red', label='Anomaly', kde=True, stat="density", alpha=0.5)
    plt.title('Distribution of Hybrid Anomaly Scores')
    plt.xlabel('Anomaly Score')
    plt.ylabel('Density')
    plt.legend()
    plt.grid(True)
    plt.savefig(save_path)
    print(f"Saved {save_path}")
    plt.close()

def plot_feature_embeddings(X_test, y_test, save_path='feature_embeddings.png'):
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
    plt.savefig(save_path)
    print(f"Saved {save_path}")
    plt.close()
