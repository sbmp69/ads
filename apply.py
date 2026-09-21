import re
import os

with open('scraped_jsx.txt', 'r', encoding='utf-8') as f:
    jsx = f.read()

jsx = jsx.replace('style="pointer-events: none;"', "style={{pointerEvents: 'none'}}")
jsx = jsx.replace('&lt;br /&gt;', '<br />')
jsx = jsx.replace('bg-[hsl(224_29%_9%)]', 'bg-gray-50')
jsx = jsx.replace('text-muted-foreground', 'text-gray-500')
jsx = jsx.replace('text-foreground', 'text-gray-900')
jsx = jsx.replace('border-border', 'border-gray-200')
jsx = jsx.replace('bg-card', 'bg-white')
jsx = jsx.replace('bg-background', 'bg-white')
jsx = jsx.replace('bg-secondary', 'bg-gray-100')
jsx = jsx.replace('text-primary-foreground', 'text-white')
jsx = jsx.replace('bg-primary', 'bg-indigo-600')
jsx = jsx.replace('text-primary', 'text-indigo-600')
jsx = jsx.replace('ring-primary', 'ring-indigo-600')
jsx = jsx.replace('text-accent', 'text-pink-500')
jsx = jsx.replace('bg-input', 'bg-gray-100')
jsx = jsx.replace('border-input', 'border-gray-300')
jsx = jsx.replace('class=', 'className=')

page_content = f"""export default function Page() {{
  return (
    {jsx}
  );
}}"""

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

globals_css = """
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 243 75% 59%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }
}
"""

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(globals_css)

print("Done")
