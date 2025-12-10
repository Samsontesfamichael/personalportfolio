import numpy as np

# 🔥 9️⃣ Optimization — Adam Optimizer From Scratch

def f(x): return (x-2)**4

def grad_f(x): return 4*(x-2)**3

x = 10.0
m = 0
v = 0
alpha = 0.05
beta1 = 0.9
beta2 = 0.999
eps = 1e-8

for t in range(1, 1001):
    g = grad_f(x)

    m = beta1*m + (1-beta1)*g
    v = beta2*v + (1-beta2)*(g*g)

    m_hat = m / (1 - beta1**t)
    v_hat = v / (1 - beta2**t)

    x -= alpha * m_hat / (np.sqrt(v_hat) + eps)

print("Minimum at x =", x)
