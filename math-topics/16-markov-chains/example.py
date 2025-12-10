import numpy as np

P = np.array([
    [0.2, 0.8],
    [0.6, 0.4]
])

state = np.array([1, 0])  # start in state 0

for _ in range(5):
    state = state @ P
    print("State distribution:", state)
