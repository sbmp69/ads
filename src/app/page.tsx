import { Download } from "lucide-react";

const recentGenerations = [
  { id: 1, name: "Summer Sale Promo", date: "Oct 24, 2023", status: "Completed" },
  { id: 2, name: "New Arrival Sneaker", date: "Oct 23, 2023", status: "Completed" },
  { id: 3, name: "Local Coffee Shop Intro", date: "Oct 23, 2023", status: "Processing" },
  { id: 4, name: "Holiday Special Offer", date: "Oct 20, 2023", status: "Completed" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Founder.</h1>
        <p className="text-gray-500 mt-1">Here is what is happening with your ads today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Total Ads Generated</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">128</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Credits Remaining</p>
          <p className="text-3xl font-bold text-indigo-600 mt-2">15</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Top Performing Ad</p>
          <p className="text-lg font-bold text-gray-900 mt-2 truncate">Summer Sale Promo</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Generations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4 border-b border-gray-200">Ad Name</th>
                <th className="px-6 py-4 border-b border-gray-200">Date</th>
                <th className="px-6 py-4 border-b border-gray-200">Status</th>
                <th className="px-6 py-4 border-b border-gray-200 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentGenerations.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{ad.name}</td>
                  <td className="px-6 py-4">{ad.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        ad.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {ad.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      disabled={ad.status !== "Completed"}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                        ad.status === "Completed"
                          ? "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 shadow-sm"
                          : "text-gray-400 bg-gray-50 border border-gray-100 cursor-not-allowed"
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
