import { LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="hidden md:block">
        <header className="flex h-[72px] items-center justify-between border-b border-gray-200/60 px-8 lg:px-10">
          <div className="flex items-center gap-2 text-[11px] text-gray-500">
            <span className="font-mono uppercase tracking-[.15em]">
              Workspace
            </span>
            <span className="text-border">/</span>
            <span className="text-gray-900">Dashboard</span>
          </div>
        </header>
      </div>
      <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em] text-indigo-600">
            <span className="h-px w-5 bg-indigo-600"></span> Dashboard Overview
          </div>
          <h1 className="text-[30px] font-bold leading-tight tracking-[-.055em] text-gray-900 sm:text-[36px]">
            Welcome back, Jordan.
          </h1>
          <p className="mt-3 max-w-[490px] text-[12px] leading-relaxed text-gray-500">
            Here's what's happening with your video ads today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-lg">
              <LayoutDashboard className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Ads Generated
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">128</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
