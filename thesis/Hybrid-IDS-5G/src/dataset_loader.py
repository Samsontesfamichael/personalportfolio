import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def generate_synthetic_data(n_samples=5000, n_features=20):
    """
    Generate synthetic network traffic data.
    """
    print("Generating synthetic data...")
    X, y = make_classification(n_samples=n_samples, n_features=n_features, 
                               n_informative=15, n_redundant=5, 
                               n_clusters_per_class=2, weights=[0.9, 0.1], 
                               flip_y=0.01, random_state=42)
    return X, y

def load_data():
    """
    Load data wrapper. Currently uses synthetic data.
    In future, this can be expanded to load NSL-KDD or CICIDS2017 from CSV files.
    """
    X, y = generate_synthetic_data(n_samples=10000, n_features=20)
    
    # Split: Train (60%), Val (20%), Test (20%)
    X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.4, random_state=42)
    X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42)
    
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_val = scaler.transform(X_val)
    X_test = scaler.transform(X_test)
    
    return X_train, X_val, X_test, y_train, y_val, y_test, scaler
