import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    txt = f.read()

match = re.search(r'return \(\s*<>\s*(.*?)\s*</>\s*\);', txt, re.DOTALL)
jsx = match.group(1)

# Search with regex to ignore whitespace
header_match = re.search(r'<div className="hidden md:block">\s*<header className="flex h-\[72px\]', jsx)
header_start = header_match.start()

main_match = re.search(r'</main>', jsx)
main_end_tag = main_match.end()

page_content_jsx = jsx[header_start:main_end_tag]
layout_jsx_before = jsx[:header_start]
layout_jsx_after = jsx[main_end_tag:]

layout_code = f"""import type {{ Metadata }} from "next";
import {{ Inter }} from "next/font/google";
import "./globals.css";

const inter = Inter({{ subsets: ["latin"] }});

export const metadata: Metadata = {{
  title: "AdGenius AI",
  description: "Generate AI video ads for your business.",
}};

export default function RootLayout({{
  children,
}}: {{
  children: React.ReactNode;
}}) {{
  return (
    <html lang="en">
      <body className={{`${{inter.className}} min-h-screen bg-white text-gray-900 antialiased`}}>
        <>
{layout_jsx_before}
{{children}}
{layout_jsx_after}
        </>
      </body>
    </html>
  );
}}
"""

page_code = f"""export default function Page() {{
  return (
    <>
{page_content_jsx}
    </>
  );
}}
"""

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout_code)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_code)
