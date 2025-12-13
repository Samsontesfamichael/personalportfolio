import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from typing import Tuple, Optional

def generate_synthetic_data(n_samples: int = 5000, n_features: int = 20) -> Tuple[np.ndarray, np.ndarray]:
    """
    Generate synthetic network traffic data using a classification dataset generator.

    Args:
        n_samples (int): The number of samples to generate. Defaults to 5000.
        n_features (int): The total number of features. Defaults to 20.

    Returns:
        Tuple[np.ndarray, np.ndarray]: A tuple containing the feature matrix X and the label vector y.
    """
    print(f"Generating synthetic data with {n_samples} samples and {n_features} features...")
    X, y = make_classification(n_samples=n_samples, n_features=n_features, 
                               n_informative=15, n_redundant=5, 
                               n_clusters_per_class=2, weights=[0.9, 0.1], 
                               flip_y=0.01, random_state=42)
    return X, y

def load_data(
    n_samples: int = 10000, 
    n_features: int = 20,
    test_size: float = 0.2,
    val_size: float = 0.1
) -> Tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, np.ndarray, np.ndarray, StandardScaler]:
    """
    Load and preprocess the dataset. Currently generates synthetic data mimicking network traffic.
    
    The data is split into Training, Validation, and Test sets. Standard scaling is applied 
    based on the training set statistics.

    Args:
        n_samples (int): Total number of samples to generate.
        n_features (int): Number of features per sample.
        test_size (float): Proportion of the dataset to include in the test split.
        val_size (float): Proportion of the dataset to include in the validation split.

    Returns:
        Tuple: Returns (X_train, X_val, X_test, y_train, y_val, y_test, scaler)
    """
    X, y = generate_synthetic_data(n_samples=n_samples, n_features=n_features)
    
    # Calculate split sizes
    # First split off the test set
    X_temp, X_test, y_temp, y_test = train_test_split(X, y, test_size=test_size, random_state=42)
    
    # Then split the remaining into train and validation
    # Adjust val_size relative to the remaining data
    relative_val_size = val_size / (1 - test_size)
    X_train, X_val, y_train, y_val = train_test_split(X_temp, y_temp, test_size=relative_val_size, random_state=42)
    
    # Apply Standard Scaling
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_val = scaler.transform(X_val)
    X_test = scaler.transform(X_test)
    
    print(f"Data Loaded: Train={X_train.shape[0]}, Val={X_val.shape[0]}, Test={X_test.shape[0]}")
    
    return X_train, X_val, X_test, y_train, y_val, y_test, scaler
