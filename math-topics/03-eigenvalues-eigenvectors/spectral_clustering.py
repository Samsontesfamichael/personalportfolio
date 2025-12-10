import numpy as np
from sklearn.datasets import make_moons
from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import rbf_kernel

# 🔥 3️⃣ Eigenvalues & Eigenvectors — Spectral Clustering

X, y = make_moons(n_samples=300, noise=0.08)

# Affinity matrix
A = rbf_kernel(X, gamma=15)

# Laplacian
D = np.diag(A.sum(axis=1))
L = D - A

# Eigenvectors of Laplacian
eigvals, eigvecs = np.linalg.eigh(L)

# Take 2 smallest eigenvectors
U = eigvecs[:, :2]

# Cluster in eigenvector space
clusters = KMeans(2).fit_predict(U)

print("Spectral Clustering labels:", clusters[:10])
