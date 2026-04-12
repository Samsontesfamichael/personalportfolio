"""
Utility functions for visualization and data helpers.

Author: Samson Tesfamichael
"""

import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd


def plot_correlation_heatmap(df: pd.DataFrame, save_path: str = "correlation_heatmap.png"):
    """Generate and save a correlation heatmap for all numeric features."""
    plt.figure(figsize=(10, 8))
    corr = df.corr()
    sns.heatmap(
        corr,
        annot=True,
        fmt=".2f",
        cmap="YlGnBu",
        square=True,
        linewidths=0.5,
        cbar_kws={"shrink": 0.8},
    )
    plt.title("Feature Correlation Heatmap")
    plt.tight_layout()
    plt.savefig(save_path, dpi=150)
    print(f"Saved {save_path}")


def plot_distribution(df: pd.DataFrame, column: str, save_path: str | None = None):
    """Plot the distribution of a single feature."""
    plt.figure(figsize=(8, 5))
    sns.histplot(df[column], kde=True, color="#2563eb", bins=30)
    plt.title(f"Distribution of {column}")
    plt.xlabel(column)
    plt.ylabel("Count")
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    if save_path:
        plt.savefig(save_path, dpi=150)
        print(f"Saved {save_path}")
    else:
        plt.show()


def plot_residuals(y_true: np.ndarray, y_pred: np.ndarray, model_name: str = "Model"):
    """Plot residuals for a regression model."""
    residuals = y_true - y_pred
    plt.figure(figsize=(8, 5))
    plt.scatter(y_pred, residuals, alpha=0.4, s=15, color="#ef4444")
    plt.axhline(y=0, color="black", linestyle="--", linewidth=1)
    plt.xlabel("Predicted Value")
    plt.ylabel("Residual")
    plt.title(f"Residual Plot — {model_name}")
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(f"residuals_{model_name.lower().replace(' ', '_')}.png", dpi=150)
    print(f"Saved residuals plot for {model_name}")


def print_results_table(results: dict):
    """Pretty-print the results table."""
    header = f"{'Model':<25s} {'RMSE':>8s} {'MAE':>8s} {'R²':>8s}"
    print("\n" + "=" * len(header))
    print(header)
    print("-" * len(header))
    for name, metrics in results.items():
        print(f"{name:<25s} {metrics['RMSE']:>8.4f} {metrics['MAE']:>8.4f} {metrics['R²']:>8.4f}")
    print("=" * len(header))
