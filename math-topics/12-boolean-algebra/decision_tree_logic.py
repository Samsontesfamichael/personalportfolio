from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification

# 🔥 1️⃣2️⃣ Boolean Algebra — Decision Tree Split Selection

X, y = make_classification(n_samples=500, n_features=4, random_state=0)

clf = DecisionTreeClassifier().fit(X, y)

print("Boolean split rules in tree:", clf.tree_.feature)
