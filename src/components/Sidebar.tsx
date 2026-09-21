"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Sparkles, FolderVideo, CreditCard, Play } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Create Ad", href: "/create", icon: Sparkles },
  { name: "My Ads", href: "/library", icon: FolderVideo },
  { name: "Billing & Settings", href: "/billing", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <Play className="w-6 h-6 text-indigo-600 fill-indigo-600" />
          AdGenius AI
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-indigo-600" : "text-gray-400"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
            F
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">Founder</span>
            <span className="text-xs text-indigo-600 font-medium">15 Credits Left</span>
          </div>
        </div>
      </div>
    </div>
  );
}
