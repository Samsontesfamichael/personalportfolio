from scipy.stats import ks_2samp
import numpy as np

# 🔥 6️⃣ Hypothesis Testing — Detect Performance Drift in ML Models

# incoming model predictions
old_scores = np.random.randn(500)
new_scores = np.random.randn(500) + 0.7  # drifted

stat, p = ks_2samp(old_scores, new_scores)

print("KS statistic:", stat)
print("p-value:", p)
print("Drift detected?", p < 0.05)
