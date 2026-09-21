import re

with open('scraped_html.html', 'r', encoding='utf-8') as f:
    html = f.read()

jsx = html
jsx = jsx.replace('class=', 'className=')
jsx = jsx.replace('for=', 'htmlFor=')
jsx = jsx.replace('stroke-width=', 'strokeWidth=')
jsx = jsx.replace('stroke-linecap=', 'strokeLinecap=')
jsx = jsx.replace('stroke-linejoin=', 'strokeLinejoin=')
jsx = jsx.replace('aria-hidden="true"', 'ariaHidden={true}')
jsx = jsx.replace('aria-label=', 'ariaLabel=')
jsx = jsx.replace('aria-selected="true"', 'ariaSelected={true}')
jsx = jsx.replace('aria-selected="false"', 'ariaSelected={false}')
jsx = jsx.replace('tabindex=', 'tabIndex=')

# fix inputs
jsx = re.sub(r'<input([^>]*?)>', r'<input\1 />', jsx)
jsx = re.sub(r'<br([^>]*?)>', r'<br\1 />', jsx)
jsx = re.sub(r'<img([^>]*?)>', r'<img\1 />', jsx)
jsx = re.sub(r'<hr([^>]*?)>', r'<hr\1 />', jsx)
jsx = jsx.replace('disabled=""', 'disabled={true}')

# extract root
match = re.search(r'<div id="root">([\s\S]*?)</div>\s*<script', jsx)
if match:
    jsx = match.group(1)

with open('scraped_jsx.txt', 'w', encoding='utf-8') as f:
    f.write(jsx)
