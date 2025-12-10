# Signal Processing

CNN Feature Extraction from Audio

## Implementation

```python
import librosa
import torch
import torch.nn as nn

audio, sr = librosa.load(librosa.ex('trumpet'))

mel = librosa.feature.melspectrogram(audio, sr=sr)
mel_tensor = torch.tensor(mel).unsqueeze(0).unsqueeze(0)

model = nn.Conv2d(1, 8, kernel_size=3)
features = model(mel_tensor)

print("Extracted audio features:", features.shape)
```
