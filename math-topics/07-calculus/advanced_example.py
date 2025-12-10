import torch

# Automatic differentiation (PyTorch)

x = torch.tensor(3.0, requires_grad=True)
y = (x - 4)**2

y.backward()
print("dy/dx =", x.grad)
