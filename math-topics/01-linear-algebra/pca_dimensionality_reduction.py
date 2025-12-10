import numpy as np
from sklearn.datasets import load_digits
from sklearn.preprocessing import StandardScaler

# 1️⃣ Linear Algebra — PCA + Eigen Decomposition + Dimensionality Reduction on Real Data

X, y = load_digits(return_X_y=True)

# Standardize
X = StandardScaler().fit_transform(X)

# Covariance
cov = np.cov(X.T)

# Eigen decomposition
eigvals, eigvecs = np.linalg.eig(cov)

# Sort
idx = np.argsort(eigvals)[::-1]
W = eigvecs[:, idx[:2]]

# Project to 2D
X_2D = X @ W

print("Projected shape:", X_2D.shape)
