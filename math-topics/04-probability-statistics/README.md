# Probability & Statistics

Gaussian Mixture Model (GMM) Using EM Algorithm

## Implementation

```python
import numpy as np
from sklearn.mixture import GaussianMixture
from sklearn.datasets import make_blobs

X, y = make_blobs(n_samples=500, centers=3, random_state=0)

gmm = GaussianMixture(n_components=3).fit(X)

print("Means:", gmm.means_)
print("Predicted clusters:", gmm.predict(X)[:10])
```
