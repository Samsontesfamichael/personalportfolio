# Information Theory

Train a Neural Network by Maximizing Mutual Information

## Implementation

```python
import torch
import torch.nn as nn

# MI(x, z) maximizing encoder
class Encoder(nn.Module):
    def __init__(self): 
        super().__init__()
        self.linear = nn.Linear(10, 5)

    def forward(self, x):
        return self.linear(x)

# InfoNCE loss
def info_nce(z):
    sim = z @ z.T
    exp = torch.exp(sim)
    return -torch.mean(torch.log(exp.diag() / exp.sum(dim=1)))

encoder = Encoder()
opt = torch.optim.Adam(encoder.parameters(), lr=0.01)

X = torch.randn(100, 10)

for _ in range(200):
    z = encoder(X)
    loss = info_nce(z)
    opt.zero_grad()
    loss.backward()
    opt.step()

print("Final MI-based loss:", loss.item())
```
