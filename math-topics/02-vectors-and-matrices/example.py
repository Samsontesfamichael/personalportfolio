import numpy as np

v = np.array([3, 4])

magnitude = np.linalg.norm(v)
unit_vector = v / magnitude

A = np.array([[1, 2],
              [3, 4]])

transpose = A.T

print("Magnitude:", magnitude)
print("Unit vector:", unit_vector)
print("Transpose:\n", transpose)
