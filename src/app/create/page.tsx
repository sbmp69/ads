"use client";

import { useState } from "react";
import { Sparkles, UploadCloud, Play } from "lucide-react";

export default function CreateAd() {
  const [activeTab, setActiveTab] = useState<"text" | "image">("text");

  return (
    <div className="space-y-8 h-full flex flex-col">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Generate a New Ad</h1>
        <p className="text-gray-500 mt-1">Select a generation mode and configure your settings.</p>
      </header>

      {/* Tabs */}
      <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab("text")}
          className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ${
            activeTab === "text"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Text-to-Ad (Local Business)
        </button>
        <button
          onClick={() => setActiveTab("image")}
          className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ${
            activeTab === "image"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Image-to-Ad (E-Commerce)
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* Input Column */}
        <div className="flex-1 space-y-6">
          {activeTab === "text" ? (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Business Niche
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none">
                  <option>Real Estate</option>
                  <option>Coffee Shop</option>
                  <option>Fitness Gym</option>
                  <option>Plumbing Services</option>
                  <option>Dentist</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Special Offer / Hook
                </label>
                <input
                  type="text"
                  placeholder="e.g., Get 50% off your first visit!"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  City / Target Location
                </label>
                <input
                  type="text"
                  placeholder="e.g., New York, NY"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Video Style
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none">
                  <option>Cinematic</option>
                  <option>UGC (User Generated Content)</option>
                  <option>Fast-paced / Trendy</option>
                </select>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 mt-4">
                <Sparkles className="w-5 h-5" />
                Generate Text-to-Video Ad
              </button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Upload Product Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <UploadCloud className="w-10 h-10 text-gray-400 mb-3" />
                  <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG or WEBP (max. 5MB)</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Background Animation Description
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g., splashing water, neon lights, minimal studio backdrop..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none resize-none"
                />
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 mt-4">
                <Sparkles className="w-5 h-5" />
                Animate Product Video
              </button>
            </div>
          )}
        </div>

        {/* Output Column */}
        <div className="w-full max-w-sm shrink-0">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm h-full min-h-[600px] flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-4">Preview</h3>
            <div className="flex-1 bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden aspect-[9/16]">
              <Play className="w-12 h-12 text-gray-300 mb-3" />
              <p className="text-sm text-gray-500 font-medium">Waiting for generation...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
