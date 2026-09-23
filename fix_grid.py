with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# In layout.tsx, replace the cyber-grid-wrapper block
grid_block = """<div className="cyber-grid-wrapper">
          <div className="cyber-grid-floor"></div>
        </div>"""
text = re.sub(r'<div className="cyber-grid-wrapper">.*?</div>\s*</div>', grid_block, text, flags=re.DOTALL)

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
