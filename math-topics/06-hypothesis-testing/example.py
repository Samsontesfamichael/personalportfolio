from scipy.stats import ttest_ind

group1 = [12, 14, 16, 13, 15]
group2 = [22, 25, 20, 23, 21]

t_stat, p_value = ttest_ind(group1, group2)

print("t-statistic:", t_stat)
print("p-value:", p_value)
