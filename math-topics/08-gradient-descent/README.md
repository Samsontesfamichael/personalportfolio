# Gradient Descent

Train Logistic Regression from Scratch

## Implementation

```python
import numpy as np

def sigmoid(z): return 1/(1 + np.exp(-z))

# Fake data
np.random.seed(0)
X = np.random.randn(500, 3)
y = (sigmoid(X.sum(axis=1) + 0.5) > 0.5).astype(int)

w = np.zeros(3)
lr = 0.1

for _ in range(2000):
    pred = sigmoid(X @ w)
    grad = X.T @ (pred - y) / len(y)
    w -= lr * grad

print("Learned weights:", w)
```
