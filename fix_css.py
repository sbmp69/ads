with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
text = re.sub(r'/\* === 3D CYBERSPACE ENVIRONMENT === \*/.*', '''/* === CLEAN CYBERPUNK HUD === */
.cyber-scene {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background-color: #050810;
}

.cyber-grid-wrapper {
  position: fixed;
  inset: 0;
  z-index: -5;
  background: 
    linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center;
  animation: bgPan 20s linear infinite;
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
}

@keyframes bgPan {
  from { background-position: 0 0; }
  to { background-position: -40px -40px; }
}

.cyber-grid-ceiling, .cyber-grid-floor {
  display: none;
}

/* Glass Panels */
.glass-panel {
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(0, 240, 255, 0.15);
  border-top: 1px solid rgba(0, 240, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.glass-panel:hover {
  border-color: rgba(0, 240, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 240, 255, 0.1);
}

/* Buttons */
.neon-btn {
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.1), rgba(176, 38, 255, 0.1));
  border: 1px solid var(--color-cyber-cyan);
  color: var(--color-cyber-text);
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
  text-shadow: 0 0 5px rgba(0, 240, 255, 0.5);
  transition: all 0.2s ease;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
}

.neon-btn:hover {
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.3), rgba(176, 38, 255, 0.3));
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
  transform: translateY(-2px);
}

.neon-btn:active {
  transform: translateY(2px);
  box-shadow: 0 0 5px rgba(0, 240, 255, 0.3);
}

/* Inputs */
.neon-input {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 240, 255, 0.2);
  color: white;
  transition: all 0.3s ease;
}

.neon-input:focus {
  outline: none;
  border-color: var(--color-cyber-cyan);
  box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.1), 0 0 15px rgba(0, 240, 255, 0.2);
}
''', text, flags=re.DOTALL)

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(text)
