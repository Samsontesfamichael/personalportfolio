import numpy as np

# PageRank

P = np.array([
    [0,   0,   1],
    [0.5, 0,   0],
    [0.5, 1,   0]
])

# Find eigenvector of eigenvalue 1
eigvals, eigvecs = np.linalg.eig(P)

pagerank = eigvecs[:, np.isclose(eigvals, 1)]
pagerank = pagerank / pagerank.sum()

print("PageRank:", pagerank.real.flatten())
