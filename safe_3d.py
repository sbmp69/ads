with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Replace the clean HUD with a SAFE 3D environment
safe_3d = '''/* === SAFE 3D CYBERSPACE === */
body {
  background-color: #050810;
  color: white;
}

.cyber-grid-wrapper {
  position: fixed;
  inset: 0;
  z-index: -5;
  perspective: 1000px;
  overflow: hidden;
  background: radial-gradient(circle at center, #0D1117 0%, #020204 100%);
}

.cyber-grid-floor {
  position: absolute;
  width: 200vw;
  height: 200vh;
  left: -50vw;
  top: 0;
  background-image: 
    linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: rotateX(75deg) translateY(0);
  animation: gridMove 3s linear infinite;
  mask-image: linear-gradient(to top, black 20%, transparent 80%);
  -webkit-mask-image: linear-gradient(to top, black 20%, transparent 80%);
}

@keyframes gridMove {
  0% { transform: rotateX(75deg) translateY(0); }
  100% { transform: rotateX(75deg) translateY(50px); }
}

/* 3D Glass Panels */
.glass-panel {
  background: rgba(13, 17, 23, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-top: 1px solid rgba(0, 240, 255, 0.5);
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  transform-style: preserve-3d;
}

main .glass-panel:hover {
  transform: translateY(-10px) translateZ(30px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 
    20px 20px 40px rgba(0,0,0,0.9),
    0 0 20px rgba(0, 240, 255, 0.2),
    inset 0 0 15px rgba(0, 240, 255, 0.1);
  border-color: rgba(0, 240, 255, 0.8);
  z-index: 10;
}

main {
  perspective: 1200px;
}

/* 3D Buttons */
.neon-btn {
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.1), rgba(176, 38, 255, 0.1));
  border: 1px solid var(--color-cyber-cyan);
  color: var(--color-cyber-text);
  box-shadow: 0 4px 0 var(--color-cyber-cyan), 0 10px 20px rgba(0,0,0,0.5);
  text-shadow: 0 0 5px rgba(0, 240, 255, 0.5);
  transition: all 0.15s ease;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transform: translateZ(20px);
}

.neon-btn:hover {
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.3), rgba(176, 38, 255, 0.3));
  box-shadow: 0 6px 0 var(--color-cyber-cyan), 0 15px 25px rgba(0,0,0,0.7), inset 0 0 15px rgba(0,240,255,0.4);
  transform: translateY(-2px) translateZ(30px);
}

.neon-btn:active {
  transform: translateY(4px) translateZ(10px);
  box-shadow: 0 0px 0 var(--color-cyber-cyan), 0 5px 10px rgba(0,0,0,0.4);
}

/* 3D Inputs */
.neon-input {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-bottom: 2px solid var(--color-cyber-cyan);
  color: white;
  transition: all 0.3s ease;
  box-shadow: inset 0 4px 10px rgba(0,0,0,0.5);
}

.neon-input:focus {
  outline: none;
  border-color: var(--color-cyber-cyan);
  transform: translateZ(15px) scale(1.02);
  box-shadow: 
    inset 0 0 10px rgba(0, 240, 255, 0.1), 
    0 10px 20px rgba(0, 240, 255, 0.15),
    0 0 15px rgba(0, 240, 255, 0.3);
}
'''

text = re.sub(r'/\* === CLEAN CYBERPUNK HUD === \*/.*', safe_3d, text, flags=re.DOTALL)

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(text)
