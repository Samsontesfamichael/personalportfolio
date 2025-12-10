import numpy as np

x = np.array([1, 2, 3, 4])

# DFT
X = np.fft.fft(x)

# Inverse DFT
x_reconstructed = np.fft.ifft(X)

print("DFT:", X)
print("Reconstructed:", x_reconstructed)
