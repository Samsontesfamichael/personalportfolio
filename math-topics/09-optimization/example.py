import sympy as sp

x, y = sp.symbols('x y')

f = x**2 + y**2 + 4

# Solve ∇f = 0
grad = [sp.diff(f, x), sp.diff(f, y)]
critical_points = sp.solve(grad)

print("Critical point:", critical_points)
