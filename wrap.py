with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    txt = f.read()

import re
# Find what's inside return ( ... );
match = re.search(r'return \(\s*(.*)\s*\);', txt, re.DOTALL)
if match:
    inner = match.group(1)
    # wrap in <>
    new_inner = f"<>\n{inner}\n</>"
    txt = txt[:match.start()] + "return (\n" + new_inner + "\n);" + txt[match.end():]

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(txt)
