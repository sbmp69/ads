import type { Metadata } from "next";
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
        className={`${inter.className} min-h-screen bg-cyber-bg text-cyber-text font-sans antialiased`}
      >
        <>
          <div className="noise-overlay min-h-[100dvh] bg-cyber-surface/50">
            <header className="flex h-16 items-center justify-between border-b border-cyber-cyan/20/70 bg-gray-50 px-4 md:hidden">
              <button
                type="button"
                className="rounded-md p-2 text-cyber-muted hover:bg-foreground/[.05] hover:text-cyber-text"
                aria-label="Open navigation"
                data-testid="button-open-navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                  aria-hidden="true"
                >
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </button>
              <a
                data-testid="link-logo"
                href="/"
                className="group flex items-center gap-3"
              >
                <span className="relative flex h-8 w-8 items-center justify-center rounded-[10px] bg-cyber-cyan text-black shadow-[0_0_22px_hsl(var(--primary)/.22)]">
                  <span className="absolute h-3 w-3 rotate-45 rounded-[3px] border-2 border-primary-foreground/90"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan-foreground"></span>
                </span>
                <span className="text-[15px] font-bold tracking-[-0.03em] text-cyber-text">
                  Ad<span className="text-cyber-cyan">Genius</span>
                </span>
              </a>
              <button
                type="button"
                className="rounded-md p-2 text-cyber-muted hover:bg-foreground/[.05] hover:text-cyber-text"
                aria-label="Notifications"
                data-testid="button-mobile-notifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
              </button>
            </header>
            <div className="flex min-h-[calc(100dvh-4rem)]">
              <div className="hidden md:block">
                <aside className="flex h-full w-[248px] shrink-0 flex-col border-r border-cyber-cyan/20/70 bg-gray-50 px-4 py-5">
                  <div className="px-3">
                    <a
                      data-testid="link-logo"
                      href="/"
                      className="group flex items-center gap-3"
                    >
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-[10px] bg-cyber-cyan text-black shadow-[0_0_22px_hsl(var(--primary)/.22)]">
                        <span className="absolute h-3 w-3 rotate-45 rounded-[3px] border-2 border-primary-foreground/90"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan-foreground"></span>
                      </span>
                      <span className="text-[15px] font-bold tracking-[-0.03em] text-cyber-text">
                        Ad<span className="text-cyber-cyan">Genius</span>
                      </span>
                    </a>
                  </div>
                  <div className="mt-10 px-3">
                    <div className="font-mono text-cyber-cyan text-[9px] uppercase tracking-[0.22em] text-cyber-muted/70">
                      Workspace
                    </div>
                  </div>
                  <nav
                    className="mt-3 flex flex-1 flex-col gap-1"
                    aria-label="Main navigation"
                  >
                    <a
                      data-testid="link-nav-dashboard"
                      href="/dashboard"
                      className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] font-semibold transition-all duration-200 text-cyber-muted hover:bg-foreground/[.04] hover:text-cyber-text"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-layout-dashboard"
                        aria-hidden="true"
                      >
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </svg>
                      <span>Dashboard</span>
                    </a>
                    <a
                      data-testid="link-nav-create-ad"
                      href="/"
                      className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] font-semibold transition-all duration-200 bg-cyber-cyan/[.11] text-cyber-cyan"
                    >
                      <span className="absolute -left-4 h-5 w-0.5 rounded-r-full bg-cyber-cyan"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-wand-sparkles"
                        aria-hidden="true"
                      >
                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
                        <path d="m14 7 3 3"></path>
                        <path d="M5 6v4"></path>
                        <path d="M19 14v4"></path>
                        <path d="M10 2v2"></path>
                        <path d="M7 8H3"></path>
                        <path d="M21 16h-4"></path>
                        <path d="M11 3H9"></path>
                      </svg>
                      <span>Create Ad</span>
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyber-cyan shadow-[0_0_9px_hsl(var(--primary))]"></span>
                    </a>
                    <a
                      data-testid="link-nav-my-ads"
                      href="/my-ads"
                      className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] font-semibold transition-all duration-200 text-cyber-muted hover:bg-foreground/[.04] hover:text-cyber-text"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-folder-open"
                        aria-hidden="true"
                      >
                        <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path>
                      </svg>
                      <span>My Ads</span>
                    </a>
                    <a
                      data-testid="link-nav-settings-&amp;-billing"
                      href="/settings"
                      className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] font-semibold transition-all duration-200 text-cyber-muted hover:bg-foreground/[.04] hover:text-cyber-text"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-settings"
                        aria-hidden="true"
                      >
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>Settings &amp; Billing</span>
                    </a>
                  </nav>
                  <div className="space-y-3">
                    <div className="rounded-xl border border-cyber-cyan/20/80 bg-foreground/[.025] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-cyber-cyan text-[9px] uppercase tracking-[.18em] text-cyber-muted">
                          Credits
                        </span>
                        <span className="text-[10px] font-bold text-cyber-cyan">
                          Pro
                        </span>
                      </div>
                      <div className="mt-3 flex items-end justify-between">
                        <span className="font-mono text-cyber-cyan text-[18px] font-medium text-cyber-text">
                          32.8
                        </span>
                        <span className="pb-0.5 text-[10px] text-cyber-muted">
                          of 50 hrs
                        </span>
                      </div>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
                        <div className="h-full w-[66%] rounded-full bg-cyber-cyan"></div>
                      </div>
                      <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-between text-[10px] font-semibold text-cyber-muted transition-colors hover:text-cyber-cyan"
                        data-testid="button-manage-credits"
                      >
                        Manage plan{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-3 border-t border-cyber-cyan/20/60 px-2 pt-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(145deg,hsl(266_70%_60%),hsl(191_85%_45%))] text-[11px] font-bold text-background">
                        JR
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[11px] font-semibold text-cyber-text">
                          Jordan Reyes
                        </div>
                        <div className="truncate text-[10px] text-cyber-muted">
                          jordan@northstar.co
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-cyber-muted transition-colors hover:text-cyber-text"
                        aria-label="Open profile menu"
                        data-testid="button-profile-menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-ellipsis"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="min-w-0 flex-1">{children}</div>
            </div>
          </div>
          <div
            role="region"
            aria-label="Notifications (F8)"
            tabIndex="-1"
            style={{ pointerEvents: "none" }}
          >
            <ol
              tabIndex="-1"
              className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
            ></ol>
          </div>
        </>
      </body>
    </html>
  );
}
