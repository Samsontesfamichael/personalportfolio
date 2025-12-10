# Logic for decision system

temperature = 38
has_cough = True

virus_suspected = (temperature > 37) and has_cough

print("Possible infection:", virus_suspected)
