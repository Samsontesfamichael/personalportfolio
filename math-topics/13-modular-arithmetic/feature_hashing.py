import numpy as np

# 🔥 1️⃣3️⃣ Modular Arithmetic — Hashing in Machine Learning

def feature_hash(x, m=1000):
    return hash(x) % m

features = ["cat", "dog", "apple", "cat"]
hashed = [feature_hash(f) for f in features]

print("Hashed features:", hashed)
