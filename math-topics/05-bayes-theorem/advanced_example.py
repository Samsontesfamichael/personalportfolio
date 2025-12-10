from sklearn.naive_bayes import GaussianNB
from sklearn.datasets import load_iris

# Naive Bayes classifier

X, y = load_iris(return_X_y=True)

model = GaussianNB()
model.fit(X, y)

print("Prediction for first sample:", model.predict([X[0]]))
