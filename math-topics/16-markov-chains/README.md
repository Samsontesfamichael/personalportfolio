# Markov Chains

Generate Text Using Markov Chain

## Implementation

```python
import random

text = "the cat sat on the mat the cat ate food"

words = text.split()
pairs = [(words[i], words[i+1]) for i in range(len(words)-1)]

transition = {}
for a, b in pairs:
    transition.setdefault(a, []).append(b)

state = "the"
generated = [state]

for _ in range(10):
    state = random.choice(transition[state])
    generated.append(state)

print("Generated text:", " ".join(generated))
```
