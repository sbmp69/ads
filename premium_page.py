with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# We will wrap the main content in a grid
# The current structure has <div className="mx-auto max-w-3xl"> 
# We'll change it to max-w-6xl and grid cols
text = text.replace('max-w-3xl', 'max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start')

# The form is currently in a glass-panel
# Let's add col-span-5 to the form wrapper
text = re.sub(r'(<div[^>]*glass-panel[^>]*>)', r'\1', text) # just to find it
# Actually, it's easier to just do string replacements for layout wrappers

# Add col-span classes manually
# Form wrapper:
text = text.replace('<div className="glass-panel border-cyber-cyan/30 rounded-2xl p-8 mb-8">', '<div className="glass-panel border-cyber-cyan/30 rounded-2xl p-8 mb-8 lg:col-span-5">')

# Storyboard wrapper (we injected it earlier)
# Previously: {storyboard && (<div className="mt-8 p-6 bg-cyber-cyan/20 border border-indigo-100 rounded-xl">...)}
# Let's redefine the storyboard UI completely to match the premium 3D prompt

new_storyboard = """
{storyboard ? (
  <div className="lg:col-span-7 glass-panel rounded-2xl p-8 sticky top-8">
    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
      <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
        </span>
        AI Generation Complete
      </h3>
      <div className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
        3 SCENES • 15 SECONDS
      </div>
    </div>
    
    <div className="space-y-6 relative">
      {/* Connecting line */}
      <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent"></div>

      {storyboard.scenes.map((scene: any, index: number) => (
        <div key={scene.sceneNumber} 
             className="relative pl-16 group transition-all duration-500 hover:-translate-y-1 hover:translate-x-2"
             style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Node dot */}
          <div className="absolute left-[22px] top-4 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366F1] group-hover:scale-150 transition-transform duration-300"></div>
          
          <div className="bg-black/40 backdrop-blur-md p-5 rounded-xl border border-white/5 group-hover:border-indigo-500/40 shadow-xl transition-all duration-300 transform-gpu group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-display font-bold tracking-widest text-indigo-300 uppercase">Scene 0{scene.sceneNumber}</span>
              <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">{scene.durationSeconds}s</span>
            </div>
            
            <p className="text-sm text-white/80 leading-relaxed font-sans mb-4">
              {scene.videoPrompt}
            </p>
            
            {scene.textOverlay && (
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-xs font-bold px-3 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                {scene.textOverlay}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-8 flex gap-4">
      <button className="neon-btn flex-1 py-3 text-sm flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        RENDER VIDEO
      </button>
      <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl px-4 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
      </button>
    </div>
  </div>
) : (
  <div className="lg:col-span-7 glass-panel rounded-2xl p-8 flex flex-col items-center justify-center min-h-[500px] border-dashed border-white/10 opacity-50 relative overflow-hidden">
    {isGenerating ? (
      <>
        <div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
        <div className="relative w-24 h-24 mb-6 perspective-1000">
          <div className="absolute inset-0 border-4 border-t-indigo-500 border-r-purple-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-b-indigo-400 border-l-purple-400 border-t-transparent border-r-transparent rounded-full animate-[spin_1.5s_linear_reverse_infinite]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-2 text-glow">Synthesizing Creative...</h3>
        <p className="text-sm text-white/50">Analyzing brand semantics and calculating visual nodes.</p>
      </>
    ) : (
      <>
        <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner transform -rotate-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
        </div>
        <h3 className="text-lg font-display font-medium text-white/40">AI Preview Console</h3>
        <p className="text-sm text-white/20 mt-2 text-center max-w-xs">Configure your parameters on the left to generate a cinematic storyboard.</p>
      </>
    )}
  </div>
)}
"""

# Replace the old storyboard block with the new one
text = re.sub(r'\{storyboard && \(\s*<div className="mt-8 p-6.*?</div>\s*\)\}', new_storyboard, text, flags=re.DOTALL)

# Add the closing div for the lg:col-span-5 wrapper we added manually
text = text.replace('<!-- End Input Section -->', '</div>\n<!-- End Input Section -->')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
