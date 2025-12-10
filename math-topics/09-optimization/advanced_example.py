import numpy as np

# Gradient descent on Rosenbrock function

def rosenbrock(x, y):
    return (1 - x)**2 + 100*(y - x**2)**2

def grad(x, y):
    dx = -2*(1 - x) - 400*x*(y - x**2)
    dy = 200*(y - x**2)
    return np.array([dx, dy])

xy = np.array([0.0, 0.0])
alpha = 0.0001

for _ in range(20000):
    xy -= alpha * grad(xy[0], xy[1])

print("Minimum:", xy)
