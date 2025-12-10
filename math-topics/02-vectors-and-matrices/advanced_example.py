import numpy as np

# Neural network forward pass

# Simple NN layer
x = np.array([0.5, 1.0, -0.5])
W = np.random.randn(3, 4)
b = np.zeros(4)

output = x @ W + b
print("Layer output:", output)
