import numpy as np

# Logistic regression gradient descent

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

X = np.array([[1, 1], [1, 2], [1, 3]])
y = np.array([0, 0, 1])

theta = np.zeros(2)
alpha = 0.1

for _ in range(1000):
    pred = sigmoid(X @ theta)
    grad = X.T @ (pred - y) / len(y)
    theta -= alpha * grad

print("Learned parameters:", theta)
