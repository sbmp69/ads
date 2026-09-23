with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# We want to replace the entire <div className="flex h-screen overflow-hidden"... wrapper
# with a flex-col layout.
# It's easier to just generate the new layout.tsx code completely.

new_layout = """import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdGenius AI",
  description: "Generate AI video ads for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-cyber-bg text-cyber-text font-sans antialiased cyber-scene`}
      >
        <div className="cyber-grid-wrapper">
          <div className="cyber-grid-ceiling"></div>
          <div className="cyber-grid-floor"></div>
        </div>
        <div className="flex flex-col min-h-screen" style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}>
          <header className="flex h-16 shrink-0 items-center justify-between glass-panel border-b border-cyber-cyan/30 px-6 z-50">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyber-cyan text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <span className="text-[18px] font-display font-bold text-cyber-text text-glow tracking-widest">
                AdGenius
              </span>
            </div>

            {/* Horizontal Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/dashboard" className="sidebar-link px-3 py-2 text-[13px] font-bold text-cyber-muted hover:text-cyber-cyan">
                Dashboard
              </a>
              <a href="/" className="sidebar-link active px-3 py-2 text-[13px] font-bold text-cyber-cyan text-glow flex items-center gap-2">
                Create Ad
                <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan shadow-[0_0_9px_#00F0FF]"></span>
              </a>
              <a href="/my-ads" className="sidebar-link px-3 py-2 text-[13px] font-bold text-cyber-muted hover:text-cyber-cyan">
                My Ads
              </a>
              <a href="/settings" className="sidebar-link px-3 py-2 text-[13px] font-bold text-cyber-muted hover:text-cyber-cyan">
                Settings
              </a>
            </nav>

            {/* Right side Profile & Credits */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-3">
                <span className="font-mono text-[10px] text-cyber-muted tracking-widest uppercase">Credits: <span className="text-cyber-cyan font-bold">32.8/50h</span></span>
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-cyber-surface/50 border border-cyber-cyan/30">
                  <div className="h-full w-[66%] rounded-full bg-cyber-cyan shadow-[0_0_10px_#00F0FF]"></div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyber-cyan text-[11px] font-bold text-black shadow-[0_0_10px_#00F0FF]">
                  JR
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 w-full overflow-y-auto overflow-x-hidden p-6 z-10">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
"""

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(new_layout)
