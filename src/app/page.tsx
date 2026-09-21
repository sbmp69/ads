export default function Page() {
  return (
    <>
      <div className="hidden md:block">
        <header className="flex h-[72px] items-center justify-between border-b border-gray-200/60 px-8 lg:px-10">
          <div className="flex items-center gap-2 text-[11px] text-gray-500">
            <span className="font-mono uppercase tracking-[.15em]">
              Creative suite
            </span>
            <span className="text-border">/</span>
            <span className="text-gray-900">New ad</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-2 text-[10px] text-gray-500 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#71e3b2] shadow-[0_0_8px_#71e3b2]"></span>{" "}
              All systems operational
            </div>
            <button
              type="button"
              className="relative text-gray-500 transition-colors hover:text-gray-900"
              aria-label="Notifications"
              data-testid="button-notifications"
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
                className="lucide lucide-bell"
                aria-hidden="true"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-[11px] text-gray-500 transition-colors hover:text-gray-900"
              data-testid="button-header-profile"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(145deg,hsl(266_70%_60%),hsl(191_85%_45%))] text-[9px] font-bold text-background">
                JR
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
      <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="animate-rise mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em] text-indigo-600">
              <span className="h-px w-5 bg-indigo-600"></span> Create new ad
            </div>
            <h1 className="text-[30px] font-bold leading-tight tracking-[-.055em] text-gray-900 sm:text-[36px]">
              Turn a brief into
              <br className="sm:hidden" /> something people feel.
            </h1>
            <p className="mt-3 max-w-[490px] text-[12px] leading-relaxed text-gray-500">
              Choose a starting point. AdGenius shapes the story, motion, and
              sound — you keep the final say.
            </p>
          </div>
          <div className="hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.16em] text-gray-500 lg:flex">
            <span>Draft</span>
            <span className="h-px w-8 bg-border"></span>
            <span className="text-indigo-600">Live canvas</span>
          </div>
        </div>
        <div
          className="flex w-full max-w-[640px] gap-1 rounded-xl border border-gray-200/70 bg-white/70 p-1"
          role="tablist"
          aria-label="Ad creation mode"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            data-testid="tab-service-business"
            className="flex flex-1 items-center gap-3 rounded-lg px-3 py-3 text-left transition-all sm:px-4 bg-gray-100 text-gray-900 shadow-[inset_0_0_0_1px_hsl(var(--border))]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600/15 text-indigo-600">
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
                className="lucide lucide-clapperboard"
                aria-hidden="true"
              >
                <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
                <path d="m6.2 5.3 3.1 3.9"></path>
                <path d="m12.4 3.4 3.1 4"></path>
                <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
              </svg>
            </span>
            <span>
              <span className="block text-[11px] font-bold">
                Service Business
              </span>
              <span className="mt-0.5 block text-[10px] text-gray-500">
                Text to video
              </span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check ml-auto text-indigo-600"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            data-testid="tab-ecommerce-product"
            className="flex flex-1 items-center gap-3 rounded-lg px-3 py-3 text-left transition-all sm:px-4 text-gray-500 hover:text-gray-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/[.04]">
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
                className="lucide lucide-image"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
            </span>
            <span>
              <span className="block text-[11px] font-bold">
                E-Commerce Product
              </span>
              <span className="mt-0.5 block text-[10px] text-gray-500">
                Image to video
              </span>
            </span>
          </button>
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(420px,1fr)_minmax(400px,.88fr)]">
          <section
            className="rounded-xl border border-gray-200/75 bg-white/70 p-5 shadow-[0_20px_70px_hsl(225_40%_3%/.18)] sm:p-7"
            data-testid="panel-ad-brief"
          >
            <div className="mb-7 flex items-center justify-between border-b border-gray-200/60 pb-5">
              <div>
                <h2 className="text-[14px] font-bold tracking-[-.02em] text-gray-900">
                  Tell us about your business
                </h2>
                <p className="mt-1 text-[10px] text-gray-500">
                  The more specific the brief, the sharper the cut.
                </p>
              </div>
              <span className="font-mono text-[9px] text-gray-500/60">
                STEP 1 / 2
              </span>
            </div>
            <div className="animate-rise space-y-7">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-gray-500">
                  <span className="font-mono text-indigo-600">01</span>
                  <span>Set the scene</span>
                </div>
                <label className="block">
                  <span className="mb-2 flex items-center justify-between text-[11px] font-semibold text-gray-900/90">
                    Business type
                  </span>
                  <input
                    placeholder="e.g. Boutique fitness studio"
                    data-testid="input-business-type"
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white/60 px-3.5 text-[12px] text-gray-900 outline-none transition-all placeholder:text-gray-500/55 focus:border-primary/70 focus:bg-white focus:ring-2 focus:ring-indigo-600/10"
                    defaultValue=""
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center justify-between text-[11px] font-semibold text-gray-900/90">
                    Offer or hook
                    <span className="font-normal text-gray-500">
                      Keep it punchy
                    </span>
                  </span>
                  <input
                    placeholder="e.g. Your strongest hour starts here"
                    data-testid="input-offer-hook"
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white/60 px-3.5 text-[12px] text-gray-900 outline-none transition-all placeholder:text-gray-500/55 focus:border-primary/70 focus:bg-white focus:ring-2 focus:ring-indigo-600/10"
                    defaultValue=""
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center justify-between text-[11px] font-semibold text-gray-900/90">
                    City / location
                  </span>
                  <input
                    placeholder="e.g. Silver Lake, Los Angeles"
                    data-testid="input-city-location"
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white/60 px-3.5 text-[12px] text-gray-900 outline-none transition-all placeholder:text-gray-500/55 focus:border-primary/70 focus:bg-white focus:ring-2 focus:ring-indigo-600/10"
                    defaultValue=""
                  />
                </label>
              </div>
              <div className="border-t border-gray-200/60 pt-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600">
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
                      className="lucide lucide-sparkles"
                      aria-hidden="true"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900">
                      AI direction
                    </p>
                    <p className="mt-1 text-[10px] leading-relaxed text-gray-500">
                      A cinematic vertical cut with kinetic typography, natural
                      pacing, and a sound bed matched to your audience.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  disabled={true}
                  data-testid="button-generate-cinematic-ad"
                  className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-[11px] font-bold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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
                  </svg>{" "}
                  Generate cinematic ad{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <p className="mt-2 text-center text-[10px] text-gray-500/70">
                  Complete the three fields to unlock generation
                </p>
              </div>
            </div>
          </section>
          <section
            className="rounded-xl border border-gray-200/75 bg-white/50 p-5 sm:p-7"
            data-testid="panel-ad-preview"
          >
            <div className="animate-rise flex h-full flex-col">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-gray-500">
                    <span className="font-mono text-indigo-600">02</span>
                    <span>Your preview</span>
                  </div>
                  <p className="mt-2 text-[10px] text-gray-500">
                    9:16 · 15 sec · 1080p
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Play preview"
                    data-testid="button-preview-play"
                    className="rounded-md p-2 text-gray-500 transition-colors hover:bg-foreground/[.06] hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                      aria-hidden="true"
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Mute preview"
                    data-testid="button-preview-mute"
                    className="rounded-md p-2 text-gray-500 transition-colors hover:bg-foreground/[.06] hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-volume2 lucide-volume-2"
                      aria-hidden="true"
                    >
                      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                      <path d="M16 9a5 5 0 0 1 0 6"></path>
                      <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="More preview options"
                    data-testid="button-preview-options"
                    className="rounded-md p-2 text-gray-500 transition-colors hover:bg-foreground/[.06] hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
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
              <div className="preview-scan relative mx-auto aspect-[9/16] w-full max-w-[275px] overflow-hidden rounded-[14px] border border-gray-200/80 shadow-2xl preview-cinematic">
                <div className="absolute inset-0">
                  <div className="absolute -left-[20%] top-[14%] h-[65%] w-[145%] rotate-[-16deg] bg-[radial-gradient(ellipse_at_center,hsl(266_74%_58%/.65),transparent_62%)] blur-[18px]"></div>
                  <div className="absolute -right-[40%] bottom-[5%] h-[70%] w-[130%] rotate-[15deg] bg-[radial-gradient(ellipse_at_center,hsl(191_90%_53%/.6),transparent_61%)] blur-[19px]"></div>
                  <div className="absolute left-[12%] top-[27%] h-[28%] w-[76%] rounded-full border border-primary/20 bg-indigo-600/[.06] blur-[1px]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,20,.15),rgba(5,9,20,.02)_35%,rgba(5,9,20,.76)_86%,rgba(5,9,20,.94))]"></div>
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[.24em] text-gray-900/70">
                      AdGenius AI
                    </span>
                    <span className="rounded-full border border-foreground/20 px-2 py-1 font-mono text-[7px] text-gray-900/60">
                      01 / 03
                    </span>
                  </div>
                  <div className="absolute bottom-[12%] left-5 right-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-px w-5 bg-indigo-600"></span>
                      <span className="font-mono text-[8px] uppercase tracking-[.24em] text-indigo-600">
                        Now showing
                      </span>
                    </div>
                    <h3 className="max-w-[205px] text-[25px] font-bold leading-[1.04] tracking-[-.055em] text-gray-900">
                      Make the moment
                      <br />
                      worth stopping for.
                    </h3>
                    <div className="mt-5 flex items-center gap-2 text-[9px] text-gray-900/60">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-foreground/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-play"
                          aria-hidden="true"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                        </svg>
                      </span>{" "}
                      Preview cut · Sound on
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-4 flex w-full max-w-[275px] items-center justify-between text-[9px] text-gray-500">
                <span className="font-mono">SCENE 01 — HOOK</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#71e3b2]"></span>{" "}
                  Ready to preview
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-gray-200/60 bg-white/35 px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-gauge text-indigo-600"
              aria-hidden="true"
            >
              <path d="m12 14 4-4"></path>
              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
            </svg>
            <div>
              <p className="text-[10px] font-semibold text-gray-900">
                Fast iteration
              </p>
              <p className="mt-0.5 text-[9px] text-gray-500">
                01:42 avg. render
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-gray-200/60 bg-white/35 px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-music2 lucide-music-2 text-pink-500"
              aria-hidden="true"
            >
              <circle cx="8" cy="18" r="4"></circle>
              <path d="M12 18V2l7 4"></path>
            </svg>
            <div>
              <p className="text-[10px] font-semibold text-gray-900">
                Sound matched
              </p>
              <p className="mt-0.5 text-[9px] text-gray-500">
                12 mood profiles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-gray-200/60 bg-white/35 px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square text-[#71e3b2]"
              aria-hidden="true"
            >
              <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
            </svg>
            <div>
              <p className="text-[10px] font-semibold text-gray-900">
                Built for ads
              </p>
              <p className="mt-0.5 text-[9px] text-gray-500">
                Hook-first framing
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
