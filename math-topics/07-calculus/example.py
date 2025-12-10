import sympy as sp

x = sp.symbols('x')

f = x**3 + 2*x + 5

derivative = sp.diff(f, x)
integral = sp.integrate(f, x)

print("Derivative:", derivative)
print("Integral:", integral)
