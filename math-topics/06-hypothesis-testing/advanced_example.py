from scipy.stats import ttest_ind

# A/B test

group_A = [45, 52, 48, 50, 49]
group_B = [60, 61, 59, 63, 62]

t_stat, p_value = ttest_ind(group_A, group_B)

if p_value < 0.05:
    print("Significant difference!")
print("t:", t_stat, "p:", p_value)
