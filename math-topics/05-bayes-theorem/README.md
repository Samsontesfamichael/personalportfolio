# Bayes' Theorem

Bayesian Linear Regression

## Implementation

```python
import numpy as np
from sklearn.linear_model import BayesianRidge

X = np.linspace(0, 1, 50).reshape(-1, 1)
y = 3*X.squeeze() + np.random.randn(50)*0.2

model = BayesianRidge().fit(X, y)

print("Posterior mean weights:", model.coef_)
print("Prediction:", model.predict([[0.5]]))
```
