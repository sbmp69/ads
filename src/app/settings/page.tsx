import { CheckCircle2, Zap } from "lucide-react";

export default function BillingSettings() {
  return (
    <>
      <div className="hidden md:block">
        <header className="flex h-[72px] items-center justify-between border-b border-cyber-cyan/30 px-8 lg:px-10">
          <div className="flex items-center gap-2 text-[11px] text-cyber-muted">
            <span className="font-mono uppercase tracking-[.15em]">
              Workspace
            </span>
            <span className="text-border">/</span>
            <span className="text-cyber-text font-display">
              Settings & Billing
            </span>
          </div>
        </header>
      </div>
      <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="space-y-8 max-w-4xl">
          <header>
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em] text-cyber-cyan text-glow">
              <span className="h-px w-5 bg-cyber-cyan text-black"></span>{" "}
              Management
            </div>
            <h1 className="text-[30px] font-bold leading-tight tracking-[-.055em] text-cyber-text font-display sm:text-[36px]">
              Settings & Billing
            </h1>
            <p className="mt-3 max-w-[490px] text-[12px] leading-relaxed text-cyber-muted">
              Manage your subscription and billing details.
            </p>
          </header>

          <div className="glass-panel p-6 rounded-xl border border-cyber-cyan/30  flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-cyber-text font-display">
                Current Plan
              </h2>
              <p className="text-cyber-muted mt-1">
                You are currently on the{" "}
                <span className="font-medium text-cyber-text font-display">
                  Free Tier
                </span>
                .
              </p>
            </div>
            <div className="px-3 py-1 bg-gray-100 text-gray-700 font-medium rounded-full text-sm">
              Free Tier
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-cyber-text font-display mb-6">
              Upgrade your plan
            </h2>

            <div className="glass-panel rounded-2xl border-2 border-cyber-cyan shadow-[0_0_15px_#00F0FF] shadow-lg overflow-hidden max-w-md relative">
              <div className="absolute top-0 right-0 bg-cyber-cyan text-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
                Recommended
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-cyber-text font-display">
                  Pro Plan
                </h3>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold text-cyber-text font-display">
                  $99
                  <span className="ml-1 text-xl font-medium text-cyber-muted">
                    /month
                  </span>
                </div>
                <p className="mt-4 text-cyber-muted">
                  Perfect for growing businesses and agencies needing
                  high-quality video ads at scale.
                </p>
              </div>

              <div className="px-8 pb-8 space-y-6">
                <ul className="space-y-4">
                  {[
                    "Unlimited Text-to-Video",
                    "100 Image-to-Video credits",
                    "Commercial License",
                    "No Watermark",
                    "Priority 24/7 Support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyber-cyan text-glow shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-cyber-cyan text-black hover:bg-cyber-cyan hover:shadow-[0_0_15px_#00F0FF] text-white font-bold py-3.5 rounded-xl  transition-colors flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 fill-white" />
                  Upgrade to Pro
                </button>
                <p className="text-center text-xs text-cyber-muted mt-3">
                  Secure payment via Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
