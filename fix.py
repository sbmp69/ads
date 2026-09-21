with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    txt = f.read()

txt = txt.replace('style="pointer-events: none;"', "style={{pointerEvents: 'none'}}")

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(txt)
