import numpy as np

# Simple gradient descent for a convex quadratic
def f(x):
    return (x-3)**2

def grad(x):
    return 2*(x-3)

x = 10
alpha = 0.1

for _ in range(50):
    x = x - alpha * grad(x)

print("Optimal x:", x)
