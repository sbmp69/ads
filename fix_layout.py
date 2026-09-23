with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}', '')
text = text.replace('className="flex flex-col min-h-screen"', 'className="flex flex-col min-h-screen w-full max-w-[100vw]"')

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
