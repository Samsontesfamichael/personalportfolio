import numpy as np

# Weather prediction

P = np.array([
    [0.7, 0.3],
    [0.4, 0.6]
])

state = np.array([1, 0])  # start at Sunny

for _ in range(5):
    state = state @ P
    print("Forecast:", state)
