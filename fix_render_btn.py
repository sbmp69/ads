with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Add isRendering state
if 'const [isRendering, setIsRendering] = useState(false);' not in text:
    text = text.replace(
        'const [storyboard, setStoryboard] = useState<any>(null);',
        'const [storyboard, setStoryboard] = useState<any>(null);\n  const [isRendering, setIsRendering] = useState(false);'
    )

# Add handleRender function
render_logic = """
  const handleRender = async () => {
    if (!storyboard) return;
    setIsRendering(true);
    try {
      const res = await fetch("/api/render-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storyboard }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Render started! Job ID: " + data.jobId);
      } else {
        alert(data.error || "Failed to start rendering");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    } finally {
      setIsRendering(false);
    }
  };
"""
if 'const handleRender' not in text:
    text = text.replace('const handleGenerate', render_logic + '\n  const handleGenerate')

# Update button
text = re.sub(
    r'<button className="neon-btn flex-1 py-3 text-sm flex items-center justify-center gap-2">\s*<svg.*?</svg>\s*RENDER VIDEO\s*</button>',
    '''<button onClick={handleRender} disabled={isRendering} className="neon-btn flex-1 py-3 text-sm flex items-center justify-center gap-2 group transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isRendering ? "animate-spin" : ""}>
                          {isRendering ? <path d="M21 12a9 9 0 1 1-6.219-8.56"></path> : <polygon points="5 3 19 12 5 21 5 3"></polygon>}
                        </svg>
                        {isRendering ? "RENDERING..." : "RENDER VIDEO"}
                      </button>''',
    text,
    flags=re.DOTALL
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
