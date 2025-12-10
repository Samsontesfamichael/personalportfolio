# Convex Optimization

L1 Regularized Regression (LASSO via CVXPY)

## Implementation

```python
import cvxpy as cp
import numpy as np

np.random.seed(0)
X = np.random.randn(100, 5)
w_true = np.array([1, 0, 2, 0, 0])
y = X @ w_true + 0.1*np.random.randn(100)

w = cp.Variable(5)
lam = 0.1

loss = cp.sum_squares(X @ w - y) + lam * cp.norm(w, 1)
problem = cp.Problem(cp.Minimize(loss))
problem.solve()

print("Estimated w:", w.value)
```
