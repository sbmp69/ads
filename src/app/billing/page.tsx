import { CheckCircle2, Zap } from "lucide-react";

export default function BillingSettings() {
  return (
    <div className="space-y-8 max-w-4xl">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Billing & Settings</h1>
        <p className="text-gray-500 mt-1">Manage your subscription and billing details.</p>
      </header>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Current Plan</h2>
          <p className="text-gray-500 mt-1">You are currently on the <span className="font-medium text-gray-900">Free Tier</span>.</p>
        </div>
        <div className="px-3 py-1 bg-gray-100 text-gray-700 font-medium rounded-full text-sm">
          Free Tier
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Upgrade your plan</h2>
        
        <div className="bg-white rounded-2xl border-2 border-indigo-600 shadow-lg overflow-hidden max-w-md relative">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
            Recommended
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900">Pro Plan</h3>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold text-gray-900">
              $99
              <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
            </div>
            <p className="mt-4 text-gray-500">
              Perfect for growing businesses and agencies needing high-quality video ads at scale.
            </p>
          </div>

          <div className="px-8 pb-8 space-y-6">
            <ul className="space-y-4">
              {[
                "Unlimited Text-to-Video",
                "100 Image-to-Video credits",
                "Commercial License",
                "No Watermark",
                "Priority 24/7 Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 fill-white" />
              Upgrade to Pro
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">Secure payment via Stripe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
