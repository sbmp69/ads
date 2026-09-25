with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re

premium_3d = '''/* === PREMIUM 3D AI STUDIO === */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

@theme {
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Plus Jakarta Sans', sans-serif;

  --color-cyber-bg: #050507;
  --color-cyber-surface: #0a0a0f;
  --color-cyber-cyan: #6366F1; /* Indigo */
  --color-cyber-purple: #8B5CF6; /* Violet */
  --color-cyber-text: #F8FAFC;
  --color-cyber-muted: #94A3B8;
}

body {
  background-color: var(--color-cyber-bg);
  color: var(--color-cyber-text);
  font-family: var(--font-sans);
  overflow-x: hidden;
}

/* 3D Background System */
.cyber-grid-wrapper {
  position: fixed;
  inset: 0;
  z-index: -5;
  perspective: 1200px;
  overflow: hidden;
  background: radial-gradient(circle at top center, rgba(99, 102, 241, 0.05) 0%, #050507 80%);
}

.cyber-grid-floor {
  position: absolute;
  width: 200vw;
  height: 200vh;
  left: -50vw;
  top: 10vh;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  transform: rotateX(80deg) translateY(0);
  animation: gridMove 8s linear infinite;
  mask-image: radial-gradient(ellipse at top, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at top, black 20%, transparent 70%);
}

@keyframes gridMove {
  0% { transform: rotateX(80deg) translateY(0); }
  100% { transform: rotateX(80deg) translateY(60px); }
}

/* Premium Glass Panels */
.glass-panel {
  background: rgba(15, 15, 20, 0.6);
  backdrop-filter: blur(24px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 
    0 24px 48px -12px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-style: preserve-3d;
}

.glass-panel:hover {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 
    0 32px 64px -12px rgba(0, 0, 0, 0.6),
    0 0 32px rgba(99, 102, 241, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-4px) translateZ(20px) rotateX(1deg);
}

/* 3D Premium Buttons */
.neon-btn {
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-weight: 600;
  box-shadow: 
    0 4px 0 rgba(79, 70, 229, 0.8), 
    0 10px 20px rgba(99, 102, 241, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translateZ(10px);
  position: relative;
  overflow: hidden;
}

.neon-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.neon-btn:hover::before {
  transform: translateX(100%);
}

.neon-btn:hover {
  transform: translateY(-2px) translateZ(20px);
  box-shadow: 
    0 6px 0 rgba(79, 70, 229, 0.8), 
    0 15px 30px rgba(99, 102, 241, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.neon-btn:active {
  transform: translateY(4px) translateZ(5px);
  box-shadow: 
    0 0px 0 rgba(79, 70, 229, 0.8), 
    0 5px 10px rgba(99, 102, 241, 0.3);
}

.neon-btn:disabled {
  opacity: 0.7;
  transform: translateY(4px) translateZ(5px);
  box-shadow: 0 0px 0 rgba(79, 70, 229, 0.8);
  pointer-events: none;
}

/* Premium Inputs */
.neon-input {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}

.neon-input:focus {
  outline: none;
  background: rgba(0, 0, 0, 0.5);
  border-color: #6366F1;
  transform: translateZ(10px);
  box-shadow: 
    inset 0 2px 4px rgba(0,0,0,0.2),
    0 0 0 3px rgba(99, 102, 241, 0.2);
}

.text-glow {
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

main {
  perspective: 1200px;
}
'''

# We will completely overwrite everything after @theme with our premium 3D design system
idx = text.find(':root {')
if idx != -1:
    text = text[:idx] + premium_3d

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(text)
