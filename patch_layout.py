with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make sure body has perspective
if 'cyber-scene' not in text:
    text = text.replace('className={`${inter.className} min-h-screen bg-cyber-bg text-cyber-text font-sans antialiased`}', 
                       'className={`${inter.className} min-h-screen bg-cyber-bg text-cyber-text font-sans antialiased cyber-scene`}')

# Add the 3D grid right inside body
grid_html = """
      <div className="cyber-grid-wrapper">
        <div className="cyber-grid-ceiling"></div>
        <div className="cyber-grid-floor"></div>
      </div>
"""
if 'cyber-grid-wrapper' not in text:
    text = text.replace('<body\n        className={`${inter.className} min-h-screen bg-cyber-bg text-cyber-text font-sans antialiased cyber-scene`}\n      >', 
                       '<body\n        className={`${inter.className} min-h-screen bg-cyber-bg text-cyber-text font-sans antialiased cyber-scene`}\n      >' + grid_html)

# wrap the whole app layout in a preserve-3d container
if 'transformStyle' not in text:
    text = text.replace('<div className="flex h-screen overflow-hidden">', 
                        '<div className="flex h-screen overflow-hidden" style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}>')

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
