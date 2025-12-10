import cvxpy as cp

# CVXPY example

x = cp.Variable()
objective = cp.Minimize((x - 3)**2)
constraints = []
prob = cp.Problem(objective, constraints)
result = prob.solve()

print("Optimal x =", x.value)
