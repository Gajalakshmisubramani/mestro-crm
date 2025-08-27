"use client";

import { Bell, Plus, Search, Settings } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="w-full h-12 bg-green-700 flex items-center justify-between px-4 sticky top-0 z-50">
      {/* Left: Brand + Workspace */}
      <div className="flex items-center gap-3">
        <span className="text-white font-semibold">Bigin</span>
        <select className="bg-green-600 text-white text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
          <option>A</option>
          <option>B</option>
        </select>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-lg mx-6 relative">
        <input
          type="text"
          placeholder="Search (ctrl + k)"
          className="w-full pl-8 pr-3 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Search size={16} className="absolute left-2 top-2.5 text-gray-500" />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-green-600">
          <Plus size={18} className="text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-green-600">
          <Bell size={18} className="text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-green-600">
          <Settings size={18} className="text-white" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 cursor-pointer" />
      </div>
    </div>
  );
}
