# Simple Bayes theorem example

P_A = 0.01            # disease prevalence
P_B_given_A = 0.95    # true positive rate
P_B_given_notA = 0.05 # false positive rate

P_notA = 1 - P_A
P_B = P_B_given_A * P_A + P_B_given_notA * P_notA

P_A_given_B = (P_B_given_A * P_A) / P_B

print("P(A|B) =", P_A_given_B)
