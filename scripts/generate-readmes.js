
const fs = require('fs');
const path = require('path');

// We copy the data structure here because we can't easily import TS in this simple script context without compilation
// Alternatively, we could read the file and regex it, but pasting the data is safer for a one-off script 
// or we can use ts-node if available, but let's stick to node.

const mathSkillsData = [
    {
        id: "linear-algebra",
        title: "Linear Algebra",
        description: "PCA + Eigen Decomposition + Dimensionality Reduction on Real Data",
        folderName: "01-linear-algebra",
        code: `import numpy as np
from sklearn.datasets import load_digits
from sklearn.preprocessing import StandardScaler

X, y = load_digits(return_X_y=True)

# Standardize
X = StandardScaler().fit_transform(X)

# Covariance
cov = np.cov(X.T)

# Eigen decomposition
eigvals, eigvecs = np.linalg.eig(cov)

# Sort
idx = np.argsort(eigvals)[::-1]
W = eigvecs[:, idx[:2]]

# Project to 2D
X_2D = X @ W

print("Projected shape:", X_2D.shape)`
    },
    {
        id: "vectors-and-matrices",
        title: "Vectors & Matrices",
        description: "Deep Neural Network Forward Pass (Manual)",
        folderName: "02-vectors-and-matrices",
        code: `import numpy as np

np.random.seed(0)

# 3-layer fully connected NN
def relu(x): return np.maximum(0, x)

x = np.random.randn(1, 10)
W1 = np.random.randn(10, 32)
W2 = np.random.randn(32, 16)
W3 = np.random.randn(16, 1)

h1 = relu(x @ W1)
h2 = relu(h1 @ W2)
output = h2 @ W3

print("NN output:", output)`
    },
    {
        id: "eigenvalues-eigenvectors",
        title: "Eigenvalues & Eigenvectors",
        description: "Spectral Clustering",
        folderName: "03-eigenvalues-eigenvectors",
        code: `import numpy as np
from sklearn.datasets import make_moons
from sklearn.cluster import KMeans

X, y = make_moons(n_samples=300, noise=0.08)

# Affinity matrix
from sklearn.metrics.pairwise import rbf_kernel
A = rbf_kernel(X, gamma=15)

# Laplacian
D = np.diag(A.sum(axis=1))
L = D - A

# Eigenvectors of Laplacian
eigvals, eigvecs = np.linalg.eigh(L)

# Take 2 smallest eigenvectors
U = eigvecs[:, :2]

# Cluster in eigenvector space
clusters = KMeans(2).fit_predict(U)

print("Spectral Clustering labels:", clusters[:10])`
    },
    {
        id: "probability-statistics",
        title: "Probability & Statistics",
        description: "Gaussian Mixture Model (GMM) Using EM Algorithm",
        folderName: "04-probability-statistics",
        code: `import numpy as np
from sklearn.mixture import GaussianMixture
from sklearn.datasets import make_blobs

X, y = make_blobs(n_samples=500, centers=3, random_state=0)

gmm = GaussianMixture(n_components=3).fit(X)

print("Means:", gmm.means_)
print("Predicted clusters:", gmm.predict(X)[:10])`
    },
    {
        id: "bayes-theorem",
        title: "Bayes' Theorem",
        description: "Bayesian Linear Regression",
        folderName: "05-bayes-theorem",
        code: `import numpy as np
from sklearn.linear_model import BayesianRidge

X = np.linspace(0, 1, 50).reshape(-1, 1)
y = 3*X.squeeze() + np.random.randn(50)*0.2

model = BayesianRidge().fit(X, y)

print("Posterior mean weights:", model.coef_)
print("Prediction:", model.predict([[0.5]]))`
    },
    {
        id: "hypothesis-testing",
        title: "Hypothesis Testing",
        description: "Detect Performance Drift in ML Models",
        folderName: "06-hypothesis-testing",
        code: `from scipy.stats import ks_2samp
import numpy as np

# incoming model predictions
old_scores = np.random.randn(500)
new_scores = np.random.randn(500) + 0.7  # drifted

stat, p = ks_2samp(old_scores, new_scores)

print("KS statistic:", stat)
print("p-value:", p)
print("Drift detected?", p < 0.05)`
    },
    {
        id: "calculus",
        title: "Calculus",
        description: "Train a Neural Network Using Autograd",
        folderName: "07-calculus",
        code: `import torch
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

print("Final loss:", loss.item())`
    },
    {
        id: "gradient-descent",
        title: "Gradient Descent",
        description: "Train Logistic Regression from Scratch",
        folderName: "08-gradient-descent",
        code: `import numpy as np

def sigmoid(z): return 1/(1 + np.exp(-z))

# Fake data
np.random.seed(0)
X = np.random.randn(500, 3)
y = (sigmoid(X.sum(axis=1) + 0.5) > 0.5).astype(int)

w = np.zeros(3)
lr = 0.1

for _ in range(2000):
    pred = sigmoid(X @ w)
    grad = X.T @ (pred - y) / len(y)
    w -= lr * grad

print("Learned weights:", w)`
    },
    {
        id: "optimization",
        title: "Optimization",
        description: "Adam Optimizer From Scratch",
        folderName: "09-optimization",
        code: `import numpy as np

def f(x): return (x-2)**4

def grad_f(x): return 4*(x-2)**3

x = 10.0
m = 0
v = 0
alpha = 0.05
beta1 = 0.9
beta2 = 0.999
eps = 1e-8

for t in range(1, 1001):
    g = grad_f(x)

    m = beta1*m + (1-beta1)*g
    v = beta2*v + (1-beta2)*(g*g)

    m_hat = m / (1 - beta1**t)
    v_hat = v / (1 - beta2**t)

    x -= alpha * m_hat / (np.sqrt(v_hat) + eps)

print("Minimum at x =", x)`
    },
    {
        id: "graph-theory",
        title: "Graph Theory",
        description: "Graph Neural Network (PyTorch Geometric)",
        folderName: "10-graph-theory",
        code: `import torch
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

print("Node embeddings:", output)`
    },
    {
        id: "combinatorics",
        title: "Combinatorics",
        description: "Beam Search for Text Generation",
        folderName: "11-combinatorics",
        code: `import heapq

def beam_search(start, next_token_fn, beam_width=3, length=5):
    sequences = [(0, [start])]

    for _ in range(length):
        all_candidates = []
        for score, seq in sequences:
            for token, prob in next_token_fn(seq).items():
                new_score = score - np.log(prob)
                all_candidates.append((new_score, seq + [token]))

        sequences = heapq.nsmallest(beam_width, all_candidates)
    
    return sequences

def dummy_next_token(seq):
    return {"a": 0.6, "b": 0.4}

print(beam_search("s", dummy_next_token))`
    },
    {
        id: "boolean-algebra",
        title: "Boolean Algebra",
        description: "Decision Tree Split Selection",
        folderName: "12-boolean-algebra",
        code: `from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=500, n_features=4, random_state=0)

clf = DecisionTreeClassifier().fit(X, y)

print("Boolean split rules in tree:", clf.tree_.feature)`
    },
    {
        id: "modular-arithmetic",
        title: "Modular Arithmetic",
        description: "Hashing in Machine Learning",
        folderName: "13-modular-arithmetic",
        code: `import numpy as np

def feature_hash(x, m=1000):
    return hash(x) % m

features = ["cat", "dog", "apple", "cat"]
hashed = [feature_hash(f) for f in features]

print("Hashed features:", hashed)`
    },
    {
        id: "convex-optimization",
        title: "Convex Optimization",
        description: "L1 Regularized Regression (LASSO via CVXPY)",
        folderName: "14-convex-optimization",
        code: `import cvxpy as cp
import numpy as np

np.random.seed(0)
X = np.random.randn(100, 5)
w_true = np.array([1, 0, 2, 0, 0])
y = X @ w_true + 0.1*np.random.randn(100)

w = cp.Variable(5)
lam = 0.1

loss = cp.sum_squares(X @ w - y) + lam * cp.norm(w, 1)
problem = cp.Problem(cp.Minimize(loss))
problem.solve()

print("Estimated w:", w.value)`
    },
    {
        id: "signal-processing",
        title: "Signal Processing",
        description: "CNN Feature Extraction from Audio",
        folderName: "15-signal-processing",
        code: `import librosa
import torch
import torch.nn as nn

audio, sr = librosa.load(librosa.ex('trumpet'))

mel = librosa.feature.melspectrogram(audio, sr=sr)
mel_tensor = torch.tensor(mel).unsqueeze(0).unsqueeze(0)

model = nn.Conv2d(1, 8, kernel_size=3)
features = model(mel_tensor)

print("Extracted audio features:", features.shape)`
    },
    {
        id: "markov-chains",
        title: "Markov Chains",
        description: "Generate Text Using Markov Chain",
        folderName: "16-markov-chains",
        code: `import random

text = "the cat sat on the mat the cat ate food"

words = text.split()
pairs = [(words[i], words[i+1]) for i in range(len(words)-1)]

transition = {}
for a, b in pairs:
    transition.setdefault(a, []).append(b)

state = "the"
generated = [state]

for _ in range(10):
    state = random.choice(transition[state])
    generated.append(state)

print("Generated text:", " ".join(generated))`
    },
    {
        id: "information-theory",
        title: "Information Theory",
        description: "Train a Neural Network by Maximizing Mutual Information",
        folderName: "17-information-theory",
        code: `import torch
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

print("Final MI-based loss:", loss.item())`
    },
]

const rootDir = process.cwd();
const mathTopicsDir = path.join(rootDir, 'math-topics');

mathSkillsData.forEach(skill => {
    const dirPath = path.join(mathTopicsDir, skill.folderName);
    const readmePath = path.join(dirPath, 'README.md');

    const content = `# ${skill.title}

${skill.description}

## Implementation

\`\`\`python
${skill.code}
\`\`\`
`;

    if (fs.existsSync(dirPath)) {
        fs.writeFileSync(readmePath, content);
        console.log(`Generated README for ${skill.title}`);
    } else {
        console.warn(`Directory not found: ${dirPath}`);
    }
});
