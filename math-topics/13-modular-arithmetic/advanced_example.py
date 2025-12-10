import random

# RSA-style key demo

p = 61
q = 53
n = p * q
phi = (p - 1) * (q - 1)

e = 17
d = pow(e, -1, phi)

msg = 42
cipher = pow(msg, e, n)
plain = pow(cipher, d, n)

print("Encrypted:", cipher)
print("Decrypted:", plain)
