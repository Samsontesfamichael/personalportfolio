import numpy as np

# Monte Carlo estimation

# Estimate probability of rolling sum=7 with two dice
N = 1000000
rolls = np.random.randint(1, 7, (N, 2))
p_estimated = np.mean(rolls.sum(axis=1) == 7)

print("Estimated P(sum=7):", p_estimated)
