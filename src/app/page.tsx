"use client";
import { useState, useEffect } from "react";
export default function Page() {
  const [businessType, setBusinessType] = useState("");
  const [offer, setOffer] = useState("");
  const [location, setLocation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyboard, setStoryboard] = useState<any>(null);
  const [isRendering, setIsRendering] = useState(false);
  const [renderJobId, setRenderJobId] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Simulate polling for the video render status
  useEffect(() => {
    if (renderJobId) {
      const timer = setTimeout(() => {
        // In a real app, this would poll a /api/render-status endpoint
        setRenderJobId(null);
        setVideoUrl(
          "https://www.w3schools.com/html/mov_bbb.mp4",
        ); // Cool cinematic placeholder
      }, 8000); // 8 second mock wait for prototype
      return () => clearTimeout(timer);
    }
  }, [renderJobId]);

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
        setRenderJobId(data.jobId);
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

  const handleGenerate = async () => {
    if (!businessType) return alert("Please enter a business type.");
    setIsGenerating(true);
    setStoryboard(null);
    try {
      const res = await fetch("/api/generate-ad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessType, offer, location }),
      });
      const data = await res.json();
      if (res.ok) {
        setStoryboard(data.storyboard);
      } else {
        alert(data.error || "Failed to generate storyboard");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="hidden md:block"></div>
      <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="animate-rise mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em] text-cyber-cyan text-glow">
              <span className="h-px w-5 bg-cyber-cyan"></span> Create new ad
            </div>
            <h1 className="text-[30px] font-display font-bold leading-tight uppercase tracking-wider text-glow tracking-[-.055em] text-cyber-text sm:text-[36px]">
              Turn a brief into
              <br className="sm:hidden" /> something people feel.
            </h1>
            <p className="mt-3 max-w-[490px] text-[12px] leading-relaxed text-cyber-muted">
              Choose a starting point. AdGenius shapes the story, motion, and
              sound — you keep the final say.
            </p>
          </div>
          <div className="hidden items-center gap-3 font-mono text-cyber-cyan text-glow text-[9px] uppercase tracking-[.16em] text-cyber-muted lg:flex">
            <span>Draft</span>
            <span className="h-px w-8 bg-border"></span>
            <span className="text-cyber-cyan text-glow">Live canvas</span>
          </div>
        </div>
        <div
          className="flex w-full max-w-[640px] gap-1 rounded-xl border border-cyber-cyan/30/70 bg-cyber-surface/30/70 p-1"
          role="tablist"
          aria-label="Ad creation mode"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            data-testid="tab-service-business"
            className="flex flex-1 items-center gap-3 rounded-lg px-3 py-3 text-left transition-all sm:px-4 bg-cyber-cyan/20 text-cyber-text shadow-[inset_0_0_0_1px_hsl(var(--border))]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cyber-cyan/15 text-cyber-cyan text-glow">
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
              <span className="mt-0.5 block text-[10px] text-cyber-muted">
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
              className="lucide lucide-check ml-auto text-cyber-cyan text-glow"
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
            className="flex flex-1 items-center gap-3 rounded-lg px-3 py-3 text-left transition-all sm:px-4 text-cyber-muted hover:text-cyber-text"
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
              <span className="mt-0.5 block text-[10px] text-cyber-muted">
                Image to video
              </span>
            </span>
          </button>
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(420px,1fr)_minmax(400px,.88fr)]">
          <section
            className="rounded-xl border border-cyber-cyan/30/75 bg-cyber-surface/30/70 p-5 shadow-[0_20px_70px_hsl(225_40%_3%/.18)] sm:p-7"
            data-testid="panel-ad-brief"
          >
            <div className="mb-7 flex items-center justify-between border-b border-cyber-cyan/30 pb-5">
              <div>
                <h2 className="text-[14px] font-bold tracking-[-.02em] text-cyber-text">
                  Tell us about your business
                </h2>
                <p className="mt-1 text-[10px] text-cyber-muted">
                  The more specific the brief, the sharper the cut.
                </p>
              </div>
              <span className="font-mono text-cyber-cyan text-glow text-[9px] text-cyber-muted/60">
                STEP 1 / 2
              </span>
            </div>
            <div className="animate-rise space-y-7">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-cyber-muted">
                  <span className="font-mono text-cyber-cyan text-glow text-cyber-cyan text-glow">
                    01
                  </span>
                  <span>Set the scene</span>
                </div>
                <label className="block">
                  <span className="mb-2 flex items-center justify-between text-[11px] font-semibold text-cyber-text/90">
                    Business type
                  </span>
                  <input
                    placeholder="e.g. Boutique fitness studio"
                    data-testid="input-business-type"
                    className="h-11 w-full rounded-lg border border-gray-300 bg-cyber-surface/30/60 px-3.5 text-[12px] text-cyber-text outline-none transition-all placeholder:text-cyber-muted/55 focus:border-primary/70 focus:bg-cyber-surface/30 focus:ring-2 focus:ring-indigo-600/10"

                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center justify-between text-[11px] font-semibold text-cyber-text/90">
                    Offer or hook
                    <span className="font-normal text-cyber-muted">
                      Keep it punchy
                    </span>
                  </span>
                  <input
                    placeholder="e.g. Your strongest hour starts here"
                    data-testid="input-offer-hook"
                    className="h-11 w-full rounded-lg border border-gray-300 bg-cyber-surface/30/60 px-3.5 text-[12px] text-cyber-text outline-none transition-all placeholder:text-cyber-muted/55 focus:border-primary/70 focus:bg-cyber-surface/30 focus:ring-2 focus:ring-indigo-600/10"

                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center justify-between text-[11px] font-semibold text-cyber-text/90">
                    City / location
                  </span>
                  <input
                    placeholder="e.g. Silver Lake, Los Angeles"
                    data-testid="input-city-location"
                    className="h-11 w-full rounded-lg border border-gray-300 bg-cyber-surface/30/60 px-3.5 text-[12px] text-cyber-text outline-none transition-all placeholder:text-cyber-muted/55 focus:border-primary/70 focus:bg-cyber-surface/30 focus:ring-2 focus:ring-indigo-600/10"

                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </label>
              </div>
              <div className="border-t border-cyber-cyan/30 pt-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyber-cyan/10 text-cyber-cyan text-glow">
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
                    <p className="text-[11px] font-semibold text-cyber-text">
                      AI direction
                    </p>
                    <p className="mt-1 text-[10px] leading-relaxed text-cyber-muted">
                      A cinematic vertical cut with kinetic typography, natural
                      pacing, and a sound bed matched to your audience.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  disabled={isGenerating || !businessType}
                  onClick={handleGenerate}
                  data-testid="button-generate-cinematic-ad"
                  className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-cyber-cyan px-4 text-[11px] font-bold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
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
                  {isGenerating ? "Generating..." : "Generate cinematic ad"}{" "}
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

                {videoUrl ? (
                  <div className="lg:col-span-7 glass-panel rounded-2xl p-8 sticky top-8 flex flex-col items-center min-h-[500px]">
                    <div className="flex items-center justify-between w-full mb-8 border-b border-white/10 pb-4">
                      <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        Cinematic Ad Ready
                      </h3>
                      <button
                        onClick={() => {
                          setVideoUrl(null);
                          setStoryboard(null);
                        }}
                        className="text-xs font-mono text-cyber-muted hover:text-white transition-colors border border-white/10 px-3 py-1 rounded-md"
                      >
                        START NEW
                      </button>
                    </div>

                    <div className="w-full max-w-[360px] aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.2)] border border-white/10 relative group">
                      <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <a
                          href={videoUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          download="cinematic_ad.mp4"
                          className="bg-white text-black font-bold px-6 py-2 rounded-full text-sm flex items-center gap-2 hover:scale-105 transition-transform"
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
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                          Download MP4
                        </a>
                      </div>
                    </div>
                  </div>
                ) : renderJobId ? (
                  <div className="lg:col-span-7 glass-panel rounded-2xl p-8 sticky top-8 flex flex-col items-center justify-center min-h-[500px] text-center">
                    <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                      <div className="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
                      <div className="absolute inset-2 border-r-2 border-purple-500 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-4 border-b-2 border-cyan-400 rounded-full animate-[spin_3s_linear_infinite]"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3">
                      Rendering Cinematic Ad
                    </h3>
                    <p className="text-cyber-muted text-sm max-w-md mb-2">
                      Higgsfield AI is synthesizing your frames in the cloud.
                    </p>
                    <p className="text-cyber-muted/60 text-xs max-w-md">
                      This usually takes 3-5 minutes. You can leave this page;
                      we'll notify you when it's ready.
                    </p>
                    <div className="mt-8 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-xs font-mono text-indigo-300">
                      JOB_ID: {renderJobId}
                    </div>
                  </div>
                ) : storyboard ? (
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
                        <div
                          key={scene.sceneNumber}
                          className="relative pl-16 group transition-all duration-500 hover:-translate-y-1 hover:translate-x-2"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* Node dot */}
                          <div className="absolute left-[22px] top-4 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366F1] group-hover:scale-150 transition-transform duration-300"></div>

                          <div className="bg-black/40 backdrop-blur-md p-5 rounded-xl border border-white/5 group-hover:border-indigo-500/40 shadow-xl transition-all duration-300 transform-gpu group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-[10px] font-display font-bold tracking-widest text-indigo-300 uppercase">
                                Scene 0{scene.sceneNumber}
                              </span>
                              <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">
                                {scene.durationSeconds}s
                              </span>
                            </div>

                            <p className="text-sm text-white/80 leading-relaxed font-sans mb-4">
                              {scene.videoPrompt}
                            </p>

                            {scene.textOverlay && (
                              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-xs font-bold px-3 py-2 rounded-lg">
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
                                >
                                  <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                  <line x1="9" y1="20" x2="15" y2="20"></line>
                                  <line x1="12" y1="4" x2="12" y2="20"></line>
                                </svg>
                                {scene.textOverlay}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={handleRender}
                        disabled={isRendering}
                        className="neon-btn flex-1 py-3 text-sm flex items-center justify-center gap-2 group transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
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
                          className={isRendering ? "animate-spin" : ""}
                        >
                          {isRendering ? (
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                          ) : (
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          )}
                        </svg>
                        {isRendering ? "RENDERING..." : "RENDER VIDEO"}
                      </button>
                      <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl px-4 transition-colors">
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
                        >
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <polyline points="3 3 3 8 8 8"></polyline>
                        </svg>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="animate-pulse"
                            >
                              <path d="M12 2v20"></path>
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-2 text-glow">
                          Synthesizing Creative...
                        </h3>
                        <p className="text-sm text-white/50">
                          Analyzing brand semantics and calculating visual
                          nodes.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner transform -rotate-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white/20"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="2.18"
                              ry="2.18"
                            ></rect>
                            <line x1="7" y1="2" x2="7" y2="22"></line>
                            <line x1="17" y1="2" x2="17" y2="22"></line>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <line x1="2" y1="7" x2="7" y2="7"></line>
                            <line x1="2" y1="17" x2="7" y2="17"></line>
                            <line x1="17" y1="17" x2="22" y2="17"></line>
                            <line x1="17" y1="7" x2="22" y2="7"></line>
                          </svg>
                        </div>
                        <h3 className="text-lg font-display font-medium text-white/40">
                          AI Preview Console
                        </h3>
                        <p className="text-sm text-white/20 mt-2 text-center max-w-xs">
                          Configure your parameters on the left to generate a
                          cinematic storyboard.
                        </p>
                      </>
                    )}
                  </div>
                )}

                <p className="mt-2 text-center text-[10px] text-cyber-muted/70">
                  Complete the three fields to unlock generation
                </p>
              </div>
            </div>
          </section>
          <section
            className="rounded-xl border border-cyber-cyan/30/75 bg-cyber-surface/30/50 p-5 sm:p-7"
            data-testid="panel-ad-preview"
          >
            <div className="animate-rise flex h-full flex-col">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-cyber-muted">
                    <span className="font-mono text-cyber-cyan text-glow text-cyber-cyan text-glow">
                      02
                    </span>
                    <span>Your preview</span>
                  </div>
                  <p className="mt-2 text-[10px] text-cyber-muted">
                    9:16 · 15 sec · 1080p
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Play preview"
                    data-testid="button-preview-play"
                    className="rounded-md p-2 text-cyber-muted transition-colors hover:bg-foreground/[.06] hover:text-cyber-text"
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
                    className="rounded-md p-2 text-cyber-muted transition-colors hover:bg-foreground/[.06] hover:text-cyber-text"
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
                    className="rounded-md p-2 text-cyber-muted transition-colors hover:bg-foreground/[.06] hover:text-cyber-text"
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
              <div className="preview-scan relative mx-auto aspect-[9/16] w-full max-w-[275px] overflow-hidden rounded-[14px] border border-cyber-cyan/30/80 shadow-2xl preview-cinematic">
                <div className="absolute inset-0">
                  <div className="absolute -left-[20%] top-[14%] h-[65%] w-[145%] rotate-[-16deg] bg-[radial-gradient(ellipse_at_center,hsl(266_74%_58%/.65),transparent_62%)] blur-[18px]"></div>
                  <div className="absolute -right-[40%] bottom-[5%] h-[70%] w-[130%] rotate-[15deg] bg-[radial-gradient(ellipse_at_center,hsl(191_90%_53%/.6),transparent_61%)] blur-[19px]"></div>
                  <div className="absolute left-[12%] top-[27%] h-[28%] w-[76%] rounded-full border border-primary/20 bg-cyber-cyan/[.06] blur-[1px]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,20,.15),rgba(5,9,20,.02)_35%,rgba(5,9,20,.76)_86%,rgba(5,9,20,.94))]"></div>
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="font-mono text-cyber-cyan text-glow text-[8px] uppercase tracking-[.24em] text-cyber-text/70">
                      AdGenius AI
                    </span>
                    <span className="rounded-full border border-foreground/20 px-2 py-1 font-mono text-cyber-cyan text-glow text-[7px] text-cyber-text/60">
                      01 / 03
                    </span>
                  </div>
                  <div className="absolute bottom-[12%] left-5 right-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-px w-5 bg-cyber-cyan"></span>
                      <span className="font-mono text-cyber-cyan text-glow text-[8px] uppercase tracking-[.24em] text-cyber-cyan text-glow">
                        Now showing
                      </span>
                    </div>
                    <h3 className="max-w-[205px] text-[25px] font-bold leading-[1.04] tracking-[-.055em] text-cyber-text">
                      Make the moment
                      <br />
                      worth stopping for.
                    </h3>
                    <div className="mt-5 flex items-center gap-2 text-[9px] text-cyber-text/60">
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
              <div className="mx-auto mt-4 flex w-full max-w-[275px] items-center justify-between text-[9px] text-cyber-muted">
                <span className="font-mono text-cyber-cyan text-glow">
                  SCENE 01 — HOOK
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-green"></span>{" "}
                  Ready to preview
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-cyber-cyan/30 bg-cyber-surface/30/35 px-4 py-3">
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
              className="lucide lucide-gauge text-cyber-cyan text-glow"
              aria-hidden="true"
            >
              <path d="m12 14 4-4"></path>
              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
            </svg>
            <div>
              <p className="text-[10px] font-semibold text-cyber-text">
                Fast iteration
              </p>
              <p className="mt-0.5 text-[9px] text-cyber-muted">
                01:42 avg. render
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-cyber-cyan/30 bg-cyber-surface/30/35 px-4 py-3">
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
              <p className="text-[10px] font-semibold text-cyber-text">
                Sound matched
              </p>
              <p className="mt-0.5 text-[9px] text-cyber-muted">
                12 mood profiles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-cyber-cyan/30 bg-cyber-surface/30/35 px-4 py-3">
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
              <p className="text-[10px] font-semibold text-cyber-text">
                Built for ads
              </p>
              <p className="mt-0.5 text-[9px] text-cyber-muted">
                Hook-first framing
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
