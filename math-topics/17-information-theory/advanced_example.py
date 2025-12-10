import numpy as np

# KL Divergence

P = np.array([0.4, 0.3, 0.3])
Q = np.array([0.5, 0.2, 0.3])

kl = np.sum(P * np.log2(P / Q))

print("KL Divergence:", kl)
