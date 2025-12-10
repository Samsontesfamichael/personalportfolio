# Graph Theory

Graph Neural Network (PyTorch Geometric)

## Implementation

```python
import torch
from torch_geometric.nn import GCNConv
from torch_geometric.datasets import KarateClub

dataset = KarateClub()
data = dataset[0]

class GNN(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = GCNConv(34, 4)
        self.conv2 = GCNConv(4, 2)

    def forward(self, x, edge_index):
        x = torch.relu(self.conv1(x, edge_index))
        return torch.softmax(self.conv2(x, edge_index), dim=1)

model = GNN()
output = model(data.x.float(), data.edge_index)

print("Node embeddings:", output)
```
