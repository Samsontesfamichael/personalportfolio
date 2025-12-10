# Modular arithmetic examples

a = 17
b = 5
m = 6

print("a mod m =", a % m)
print("b mod m =", b % m)

# Modular inverse using pow()
inv_5_mod_7 = pow(5, -1, 7)

print("Inverse of 5 mod 7 =", inv_5_mod_7)
