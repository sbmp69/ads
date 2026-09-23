import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

if 'use client' not in content:
    content = '"use client";\nimport { useState } from "react";\n' + content

state_vars = """
  const [businessType, setBusinessType] = useState('');
  const [offer, setOffer] = useState('');
  const [location, setLocation] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyboard, setStoryboard] = useState<any>(null);

  const handleGenerate = async () => {
    if (!businessType) return alert('Please enter a business type.');
    setIsGenerating(true);
    setStoryboard(null);
    try {
      const res = await fetch('/api/generate-ad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessType, offer, location })
      });
      const data = await res.json();
      if (res.ok) {
        setStoryboard(data.storyboard);
      } else {
        alert(data.error || 'Failed to generate storyboard');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    } finally {
      setIsGenerating(false);
    }
  };
"""

content = content.replace('export default function Page() {', 'export default function Page() {\n' + state_vars)

# Fix regex for self closing tags: <input ... />
# Replace defaultValue="" or similar if we want, but it's easier just to add the props before the closing slash.
content = re.sub(
    r'(<input[^>]*?data-testid="input-business-type"[^>]*?)(/?>)',
    r'\1 value={businessType} onChange={(e) => setBusinessType(e.target.value)} \2',
    content
)
content = re.sub(
    r'(<input[^>]*?data-testid="input-offer-hook"[^>]*?)(/?>)',
    r'\1 value={offer} onChange={(e) => setOffer(e.target.value)} \2',
    content
)
content = re.sub(
    r'(<input[^>]*?data-testid="input-city-location"[^>]*?)(/?>)',
    r'\1 value={location} onChange={(e) => setLocation(e.target.value)} \2',
    content
)

# For button, it's not self-closing
content = re.sub(
    r'<button([^>]*?)data-testid="button-generate-cinematic-ad"([^>]*?)>([^<]*?)</button>',
    r'<button\1data-testid="button-generate-cinematic-ad"\2 onClick={handleGenerate} disabled={isGenerating}>\n{isGenerating ? "GENERATING SCRIPT..." : "\3"}\n</button>',
    content
)

storyboard_ui = """
{storyboard && (
  <div className="mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-xl">
    <h3 className="text-lg font-bold text-indigo-900 mb-4">Generated Storyboard</h3>
    <div className="space-y-4">
      {storyboard.scenes.map((scene: any) => (
        <div key={scene.sceneNumber} className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100/50">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">SCENE {scene.sceneNumber}</span>
            <span className="text-xs text-gray-500">{scene.durationSeconds}s</span>
          </div>
          <p className="text-sm text-gray-700 font-medium mb-2">"{scene.videoPrompt}"</p>
          {scene.textOverlay && (
            <div className="inline-block bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded">
              OVERLAY: {scene.textOverlay}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}
"""

content = re.sub(
    r'(<button[^>]*?data-testid="button-generate-cinematic-ad"[^>]*?>.*?</button>)',
    r'\1\n' + storyboard_ui,
    content,
    flags=re.DOTALL
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
