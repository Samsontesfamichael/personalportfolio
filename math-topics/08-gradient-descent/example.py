import numpy as np

def f(x):
    return x**2  # function to minimize

def grad_f(x):
    return 2*x  # derivative

alpha = 0.1
x = 10  # starting point

for _ in range(20):
    x = x - alpha * grad_f(x)

print("Minimized x:", x)
