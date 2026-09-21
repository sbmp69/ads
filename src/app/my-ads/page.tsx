import { Play, Download } from "lucide-react";

const ads = [
  {
    id: 1,
    title: "Summer Sale Promo",
    date: "Oct 24, 2023",
    thumbnail: "bg-indigo-100",
  },
  {
    id: 2,
    title: "New Arrival Sneaker",
    date: "Oct 23, 2023",
    thumbnail: "bg-blue-100",
  },
  {
    id: 3,
    title: "Local Coffee Shop Intro",
    date: "Oct 23, 2023",
    thumbnail: "bg-orange-100",
  },
  {
    id: 4,
    title: "Holiday Special Offer",
    date: "Oct 20, 2023",
    thumbnail: "bg-red-100",
  },
  {
    id: 5,
    title: "Fitness Gym Motivation",
    date: "Oct 18, 2023",
    thumbnail: "bg-slate-100",
  },
  {
    id: 6,
    title: "Real Estate Tour",
    date: "Oct 15, 2023",
    thumbnail: "bg-green-100",
  },
];

export default function MyAds() {
  return (
    <>
      <div className="hidden md:block">
        <header className="flex h-[72px] items-center justify-between border-b border-gray-200/60 px-8 lg:px-10">
          <div className="flex items-center gap-2 text-[11px] text-gray-500">
            <span className="font-mono uppercase tracking-[.15em]">
              Workspace
            </span>
            <span className="text-border">/</span>
            <span className="text-gray-900">My Ads</span>
          </div>
        </header>
      </div>
      <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="space-y-8">
          <header className="flex items-center justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em] text-indigo-600">
                <span className="h-px w-5 bg-indigo-600"></span> Library
              </div>
              <h1 className="text-[30px] font-bold leading-tight tracking-[-.055em] text-gray-900 sm:text-[36px]">
                My Ads
              </h1>
              <p className="mt-3 max-w-[490px] text-[12px] leading-relaxed text-gray-500">
                Manage and download your generated videos.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ads.map((ad) => (
              <div
                key={ad.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
              >
                <div
                  className={`aspect-[9/16] ${ad.thumbnail} relative group flex items-center justify-center cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 text-gray-900 fill-gray-900 ml-1" />
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-1">
                      {ad.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{ad.date}</p>
                  </div>
                  <button className="w-full mt-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    Download MP4
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
