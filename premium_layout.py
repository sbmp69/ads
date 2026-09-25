with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make sure grid is correct
if 'cyber-grid-ceiling' in text:
    import re
    text = re.sub(r'<div className="cyber-grid-ceiling"></div>', '', text)

# Typography changes
text = text.replace('font-mono', 'font-display')
text = text.replace('tracking-[.18em]', 'tracking-widest')
text = text.replace('text-cyber-cyan', 'text-indigo-400')
text = text.replace('bg-cyber-cyan', 'bg-indigo-500')
text = text.replace('#00F0FF', '#6366F1')
text = text.replace('shadow-[0_0_10px_#6366F1]', 'shadow-[0_0_15px_rgba(99,102,241,0.6)]')
text = text.replace('shadow-[0_0_9px_#6366F1]', 'shadow-[0_0_15px_rgba(99,102,241,0.6)]')

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
