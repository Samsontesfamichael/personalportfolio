import numpy as np

data = np.array([2, 4, 4, 4, 5, 5, 7, 9])

mean = np.mean(data)
variance = np.var(data)
std_dev = np.std(data)

print("Mean:", mean)
print("Variance:", variance)
print("Standard Deviation:", std_dev)
