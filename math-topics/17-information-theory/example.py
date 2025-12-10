import numpy as np

p = np.array([0.5, 0.25, 0.25])

entropy = -np.sum(p * np.log2(p))

print("Entropy:", entropy)
