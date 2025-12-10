import numpy as np
from scipy.stats import norm

# Gaussian PDF & sampling

x = np.linspace(-3, 3, 100)
pdf = norm.pdf(x, loc=0, scale=1)

samples = norm.rvs(size=10000)

print("Sample mean:", samples.mean())
print("Sample variance:", samples.var())
