import { LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="hidden md:block">
        <header className="flex h-[72px] items-center justify-between border-b border-cyber-cyan/30 px-8 lg:px-10">
          <div className="flex items-center gap-2 text-[11px] text-cyber-muted">
            <span className="font-mono uppercase tracking-[.15em]">
              Workspace
            </span>
            <span className="text-border">/</span>
            <span className="text-cyber-text font-display">Dashboard</span>
          </div>
        </header>
      </div>
      <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em] text-cyber-cyan text-glow">
            <span className="h-px w-5 bg-cyber-cyan text-black"></span>{" "}
            Dashboard Overview
          </div>
          <h1 className="text-[30px] font-bold leading-tight tracking-[-.055em] text-cyber-text font-display sm:text-[36px]">
            Welcome back, Jordan.
          </h1>
          <p className="mt-3 max-w-[490px] text-[12px] leading-relaxed text-cyber-muted">
            Here's what's happening with your video ads today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-xl border border-cyber-cyan/30  flex items-center gap-4">
            <div className="p-3 bg-cyber-cyan/10 rounded-lg">
              <LayoutDashboard className="w-6 h-6 text-cyber-cyan text-glow" />
            </div>
            <div>
              <p className="text-sm font-medium text-cyber-muted">
                Total Ads Generated
              </p>
              <p className="text-2xl font-bold text-cyber-text font-display mt-1">
                128
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
