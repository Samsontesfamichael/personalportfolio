import numpy as np
from scipy.signal import butter, filtfilt

# Low-pass filtering

fs = 1000
t = np.linspace(0, 1, fs)
signal = np.sin(2 * np.pi * 50 * t) + 0.5*np.random.randn(fs)

b, a = butter(4, 100/(fs/2))
filtered = filtfilt(b, a, signal)

print("Filtered signal shape:", filtered.shape)
