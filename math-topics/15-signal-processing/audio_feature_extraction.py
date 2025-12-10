import librosa
import torch
import torch.nn as nn

# 🔥 1️⃣5️⃣ Signal Processing — CNN Feature Extraction from Audio

# Load sample provided by librosa
try:
    audio, sr = librosa.load(librosa.ex('trumpet'))

    mel = librosa.feature.melspectrogram(y=audio, sr=sr)
    mel_tensor = torch.tensor(mel).unsqueeze(0).unsqueeze(0)

    model = nn.Conv2d(1, 8, kernel_size=3)
    features = model(mel_tensor)

    print("Extracted audio features:", features.shape)
except Exception as e:
    print("Error:", e)
    print("Ensure librosa is installed.")
