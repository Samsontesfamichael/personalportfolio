"""
Crop Yield Prediction Using Machine Learning
=============================================
Complete ML pipeline for predicting crop yield using environmental
and agronomic variables.

Author: Samson Tesfamichael
Year: 2025

Models: Linear Regression, Random Forest, Gradient Boosting, XGBoost
Dataset: Simulated agronomic data (FAO-style features)
- FAOSTAT: https://www.fao.org/faostat/en/#data/QCL
- Kaggle Reference: https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import warnings

warnings.filterwarnings("ignore")

# Try to import XGBoost; fall back gracefully
try:
    from xgboost import XGBRegressor
    HAS_XGBOOST = True
except ImportError:
    HAS_XGBOOST = False
    print("Warning: XGBoost not installed. Skipping XGBoost model.")

# Set random seed for reproducibility
np.random.seed(42)


class CropYieldPredictor:
    """
    A machine learning pipeline for crop yield prediction using
    environmental and agronomic variables.
    """

    def __init__(self):
        self.scaler = MinMaxScaler()
        self.models = {}
        self.results = {}
        self.feature_names = [
            "rainfall_mm",
            "temperature_c",
            "soil_nitrogen_pct",
            "soil_ph",
            "fertilizer_input_kg_ha",
            "humidity_pct",
        ]

    # ------------------------------------------------------------------ #
    #  DATA GENERATION
    # ------------------------------------------------------------------ #

    def generate_dataset(self, n_samples: int = 2000) -> pd.DataFrame:
        """
        Generate a realistic synthetic crop yield dataset.

        The target variable (crop_yield) is constructed as a non-linear
        combination of the features with some noise, mimicking real
        agronomic relationships.
        """
        print(f"Generating synthetic dataset with {n_samples} samples...")

        # Feature distributions (realistic ranges)
        rainfall = np.random.normal(800, 200, n_samples)           # mm/year
        temperature = np.random.normal(25, 5, n_samples)            # °C
        soil_nitrogen = np.random.uniform(0.1, 2.5, n_samples)      # %
        soil_ph = np.random.normal(6.5, 0.8, n_samples)             # pH
        fertilizer = np.random.uniform(50, 300, n_samples)           # kg/ha
        humidity = np.random.normal(65, 15, n_samples)               # %

        # Clip to realistic ranges
        rainfall = np.clip(rainfall, 200, 1500)
        temperature = np.clip(temperature, 10, 45)
        soil_nitrogen = np.clip(soil_nitrogen, 0.05, 3.0)
        soil_ph = np.clip(soil_ph, 4.0, 9.0)
        fertilizer = np.clip(fertilizer, 0, 500)
        humidity = np.clip(humidity, 20, 95)

        # Non-linear yield model
        yield_value = (
            0.004 * rainfall
            - 0.002 * (temperature - 25) ** 2
            + 1.2 * soil_nitrogen
            - 0.15 * (soil_ph - 6.5) ** 2
            + 0.005 * fertilizer
            + 0.01 * humidity
            + np.random.normal(0, 0.3, n_samples)  # noise
        )
        yield_value = np.clip(yield_value, 0.5, 10.0)

        df = pd.DataFrame(
            {
                "rainfall_mm": rainfall,
                "temperature_c": temperature,
                "soil_nitrogen_pct": soil_nitrogen,
                "soil_ph": soil_ph,
                "fertilizer_input_kg_ha": fertilizer,
                "humidity_pct": humidity,
                "crop_yield_ton_ha": yield_value,
            }
        )
        print(f"Dataset shape: {df.shape}")
        print(df.describe().round(2))
        return df

    # ------------------------------------------------------------------ #
    #  PREPROCESSING
    # ------------------------------------------------------------------ #

    def preprocess(self, df: pd.DataFrame):
        """
        Handle missing values, normalize features, and split data.
        """
        print("\nPreprocessing data...")

        # Simulate some missing values and impute
        df_clean = df.copy()
        mask = np.random.random(df_clean.shape) < 0.02
        df_clean = df_clean.mask(mask)
        df_clean = df_clean.fillna(df_clean.median())

        X = df_clean[self.feature_names].values
        y = df_clean["crop_yield_ton_ha"].values

        # Train / Validation / Test  split  (60 / 20 / 20)
        X_train, X_temp, y_train, y_temp = train_test_split(
            X, y, test_size=0.4, random_state=42
        )
        X_val, X_test, y_val, y_test = train_test_split(
            X_temp, y_temp, test_size=0.5, random_state=42
        )

        # Normalize
        X_train = self.scaler.fit_transform(X_train)
        X_val = self.scaler.transform(X_val)
        X_test = self.scaler.transform(X_test)

        print(f"Train: {X_train.shape[0]}, Val: {X_val.shape[0]}, Test: {X_test.shape[0]}")
        return X_train, X_val, X_test, y_train, y_val, y_test

    # ------------------------------------------------------------------ #
    #  CORRELATION ANALYSIS
    # ------------------------------------------------------------------ #

    @staticmethod
    def correlation_analysis(df: pd.DataFrame):
        """Print the correlation matrix for the dataset."""
        print("\nCorrelation with crop_yield_ton_ha:")
        corr = df.corr()["crop_yield_ton_ha"].drop("crop_yield_ton_ha").sort_values(
            ascending=False
        )
        print(corr.round(3))
        return corr

    # ------------------------------------------------------------------ #
    #  MODEL TRAINING
    # ------------------------------------------------------------------ #

    def train_models(self, X_train, y_train, X_val, y_val):
        """
        Train Linear Regression, Random Forest, Gradient Boosting,
        and (optionally) XGBoost.
        """
        print("\n--- Training Models ---")

        candidates = {
            "Linear Regression": LinearRegression(),
            "Random Forest": RandomForestRegressor(
                n_estimators=200, max_depth=10, random_state=42
            ),
            "Gradient Boosting": GradientBoostingRegressor(
                n_estimators=200, max_depth=5, learning_rate=0.1, random_state=42
            ),
        }
        if HAS_XGBOOST:
            candidates["XGBoost"] = XGBRegressor(
                n_estimators=200,
                max_depth=5,
                learning_rate=0.1,
                random_state=42,
                verbosity=0,
            )

        for name, model in candidates.items():
            print(f"\nTraining {name}...")
            model.fit(X_train, y_train)
            self.models[name] = model

            # Validation metrics
            y_pred = model.predict(X_val)
            rmse = np.sqrt(mean_squared_error(y_val, y_pred))
            mae = mean_absolute_error(y_val, y_pred)
            r2 = r2_score(y_val, y_pred)
            print(f"  Val RMSE: {rmse:.4f} | MAE: {mae:.4f} | R²: {r2:.4f}")

    # ------------------------------------------------------------------ #
    #  EVALUATION
    # ------------------------------------------------------------------ #

    def evaluate(self, X_test, y_test):
        """Evaluate all models on the test set and store results."""
        print("\n--- Test-Set Evaluation ---")
        for name, model in self.models.items():
            y_pred = model.predict(X_test)
            rmse = np.sqrt(mean_squared_error(y_test, y_pred))
            mae = mean_absolute_error(y_test, y_pred)
            r2 = r2_score(y_test, y_pred)
            self.results[name] = {
                "RMSE": round(rmse, 4),
                "MAE": round(mae, 4),
                "R²": round(r2, 4),
                "y_pred": y_pred,
            }
            print(f"{name:25s}  RMSE: {rmse:.4f}  MAE: {mae:.4f}  R²: {r2:.4f}")

    # ------------------------------------------------------------------ #
    #  VISUALIZATIONS
    # ------------------------------------------------------------------ #

    def plot_predicted_vs_actual(self, y_test):
        """Scatter plot: predicted vs. actual yield for the best model."""
        best_name = max(self.results, key=lambda k: self.results[k]["R²"])
        y_pred = self.results[best_name]["y_pred"]
        r2 = self.results[best_name]["R²"]

        plt.figure(figsize=(8, 6))
        plt.scatter(y_test, y_pred, alpha=0.5, s=20, color="#2563eb", edgecolors="w", linewidths=0.3)
        mn, mx = min(y_test.min(), y_pred.min()), max(y_test.max(), y_pred.max())
        plt.plot([mn, mx], [mn, mx], "r--", lw=2, label="Perfect prediction")
        plt.xlabel("Actual Yield (ton/ha)")
        plt.ylabel("Predicted Yield (ton/ha)")
        plt.title(f"Predicted vs. Actual Crop Yield — {best_name} (R² = {r2})")
        plt.legend()
        plt.grid(True, alpha=0.3)
        plt.tight_layout()
        plt.savefig("predicted_vs_actual.png", dpi=150)
        print("Saved predicted_vs_actual.png")

    def plot_feature_importance(self):
        """Horizontal bar chart of feature importance from the best tree model."""
        # Pick best tree-based model
        tree_models = {k: v for k, v in self.models.items() if hasattr(v, "feature_importances_")}
        if not tree_models:
            print("No tree-based model available for feature importance.")
            return
        best_tree = max(tree_models, key=lambda k: self.results[k]["R²"])
        importances = tree_models[best_tree].feature_importances_
        idx = np.argsort(importances)

        plt.figure(figsize=(8, 6))
        colors = sns.color_palette("YlGn", len(importances))
        plt.barh(
            [self.feature_names[i] for i in idx],
            importances[idx],
            color=[colors[i] for i in range(len(idx))],
        )
        plt.xlabel("Importance")
        plt.title(f"Feature Importance — {best_tree} Model")
        plt.grid(True, axis="x", alpha=0.3)
        plt.tight_layout()
        plt.savefig("feature_importance.png", dpi=150)
        print("Saved feature_importance.png")

    def plot_model_comparison(self):
        """Grouped bar chart comparing all models."""
        names = list(self.results.keys())
        rmses = [self.results[n]["RMSE"] for n in names]
        maes = [self.results[n]["MAE"] for n in names]
        r2s = [self.results[n]["R²"] for n in names]

        x = np.arange(len(names))
        w = 0.25

        plt.figure(figsize=(10, 6))
        plt.bar(x - w, rmses, w, label="RMSE", color="#3b82f6")
        plt.bar(x, maes, w, label="MAE", color="#f97316")
        plt.bar(x + w, r2s, w, label="R² Score", color="#22c55e")
        plt.xticks(x, names, rotation=15)
        plt.ylabel("Score")
        plt.title("Model Comparison — Crop Yield Prediction")
        plt.legend()
        plt.grid(True, axis="y", alpha=0.3)
        plt.tight_layout()
        plt.savefig("model_comparison.png", dpi=150)
        print("Saved model_comparison.png")

    @staticmethod
    def plot_yield_trend():
        """Simulated historical yield trend chart."""
        years = np.arange(2010, 2025)
        base = np.linspace(3.0, 5.5, len(years))
        noise = np.random.normal(0, 0.25, len(years))
        yields = base + noise

        plt.figure(figsize=(8, 6))
        plt.plot(years, yields, "b-o", lw=2, markersize=6)
        plt.fill_between(years, yields - 0.4, yields + 0.4, alpha=0.15, color="blue")
        plt.xlabel("Year")
        plt.ylabel("Average Crop Yield (ton/ha)")
        plt.title("Crop Yield Trend Over Time (2010–2024)")
        plt.grid(True, alpha=0.3)
        plt.tight_layout()
        plt.savefig("yield_trend.png", dpi=150)
        print("Saved yield_trend.png")


# ===================================================================== #
#  MAIN
# ===================================================================== #

def main():
    predictor = CropYieldPredictor()

    # 1. Generate data
    df = predictor.generate_dataset(n_samples=2000)

    # 2. Correlation analysis
    predictor.correlation_analysis(df)

    # 3. Preprocess
    X_train, X_val, X_test, y_train, y_val, y_test = predictor.preprocess(df)

    # 4. Train models
    predictor.train_models(X_train, y_train, X_val, y_val)

    # 5. Evaluate on test set
    predictor.evaluate(X_test, y_test)

    # 6. Generate plots
    predictor.plot_predicted_vs_actual(y_test)
    predictor.plot_feature_importance()
    predictor.plot_model_comparison()
    predictor.plot_yield_trend()

    print("\n✅ All plots saved successfully.")
    print("Run complete.")


if __name__ == "__main__":
    main()
