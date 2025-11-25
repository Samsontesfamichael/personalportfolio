import re

# Read the file
with open('components/projects.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace image paths
content = re.sub(r'image: "/', 'image: "/personalportfolio/', content)

# Replace screenshot paths  
content = re.sub(r'screenshots: \["/([^"]+)"', r'screenshots: ["/personalportfolio/\1"', content)
content = re.sub(r', "/([^"]+\.jpg)"', r', "/personalportfolio/\1"', content)

# Replace logo paths
content = re.sub(r'logo: "/tech/', 'logo: "/personalportfolio/tech/', content)

# Write back
with open('components/projects.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Image paths updated successfully!")
