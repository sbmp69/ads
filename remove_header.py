with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Remove the <header> block entirely
text = re.sub(r'<header[^>]*>.*?</header>', '', text, flags=re.DOTALL)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
