import numpy as np

# 🔥 2️⃣ Vectors & Matrices — Deep Neural Network Forward Pass (Manual)

np.random.seed(0)

# 3-layer fully connected NN
def relu(x): return np.maximum(0, x)

x = np.random.randn(1, 10)
W1 = np.random.randn(10, 32)
W2 = np.random.randn(32, 16)
W3 = np.random.randn(16, 1)

h1 = relu(x @ W1)
h2 = relu(h1 @ W2)
output = h2 @ W3

print("NN output:", output)
