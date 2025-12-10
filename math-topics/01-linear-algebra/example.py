import numpy as np

# Matrix and vector
A = np.array([[2, 1],
              [3, 4]])

v = np.array([1, 2])

# Matrix-vector multiplication
result = A @ v

# Determinant and inverse
detA = np.linalg.det(A)
invA = np.linalg.inv(A)

print("A @ v =", result)
print("det(A) =", detA)
print("A inverse =\n", invA)
