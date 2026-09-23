with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('defaultValue=""', '')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
