import heapq
import numpy as np

# 🔥 1️⃣1️⃣ Combinatorics — Beam Search for Text Generation

def beam_search(start, next_token_fn, beam_width=3, length=5):
    sequences = [(0, [start])]

    for _ in range(length):
        all_candidates = []
        for score, seq in sequences:
            for token, prob in next_token_fn(seq).items():
                new_score = score - np.log(prob)
                all_candidates.append((new_score, seq + [token]))

        sequences = heapq.nsmallest(beam_width, all_candidates)
    
    return sequences

def dummy_next_token(seq):
    return {"a": 0.6, "b": 0.4}

print(beam_search("s", dummy_next_token))
