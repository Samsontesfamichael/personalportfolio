# Calculus

Train a Neural Network Using Autograd

## Implementation

```python
import torch
import torch.nn as nn

X = torch.randn(100, 3)
y = torch.sum(X, dim=1, keepdim=True)

model = nn.Sequential(
    nn.Linear(3, 10),
    nn.ReLU(),
    nn.Linear(10, 1)
)

optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

for epoch in range(200):
    pred = model(X)
    loss = ((pred - y)**2).mean()

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

print("Final loss:", loss.item())
```
