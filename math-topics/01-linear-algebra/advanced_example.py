import numpy as np

# PCA from scratch

# Generate data
X = np.array([
    [2.5, 2.4],
    [0.5, 0.7],
    [2.2, 2.9],
    [1.9, 2.2],
    [3.1, 3.0],
])

# Center data
X_centered = X - X.mean(axis=0)

# Covariance matrix
cov = np.cov(X_centered.T)

# Eigen decomposition
eigenvalues, eigenvectors = np.linalg.eig(cov)

# Sort by largest eigenvalue
idx = eigenvalues.argsort()[::-1]
principal_component = eigenvectors[:, idx[0]]

print("Principal Component:", principal_component)
