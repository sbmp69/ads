with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    txt = f.read()

txt = txt.replace('ariaLabel', 'aria-label')
txt = txt.replace('ariaHidden={true}', 'aria-hidden="true"')
txt = txt.replace('ariaHidden={false}', 'aria-hidden="false"')
txt = txt.replace('ariaSelected={true}', 'aria-selected="true"')
txt = txt.replace('ariaSelected={false}', 'aria-selected="false"')
txt = txt.replace('value=""', 'defaultValue=""')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(txt)
