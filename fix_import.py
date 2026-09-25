with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find the @import statement for Plus Jakarta Sans
match = re.search(r"@import url\('https://fonts\.googleapis\.com/css2\?family=Plus\+Jakarta\+Sans[^']+'\);", text)
if match:
    import_stmt = match.group(0)
    # Remove it from its current location
    text = text.replace(import_stmt, '')
    # Add it to the very top of the file
    text = import_stmt + '\n' + text.lstrip()

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(text)
