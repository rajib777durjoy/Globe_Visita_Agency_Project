
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-5 hidden md:block">

        <h1 className="text-2xl font-bold mb-8">
          User Panel
        </h1>

        <nav className="space-y-4 text-blue-100">

          <a href="/userDashboard" className="block hover:text-white">
            📊 Overview
          </a>

          <a href="/user/items" className="block hover:text-white">
            📦 My Items
          </a>

          <a href="/user/profile" className="block hover:text-white">
            👤 Profile
          </a>

          <a href="/user/settings" className="block hover:text-white">
            ⚙️ Settings
          </a>

        </nav>

      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

          <h2 className="text-xl font-semibold text-gray-700">
            User Dashboard
          </h2>

          <div className="flex items-center gap-3">
            <span className="text-gray-600">User</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          </div>

        </header>

        {/* Page Content */}
        <main className="p-6 overflow-y-auto flex-1">
          {children}
        </main>

      </div>
    </div>
  );
};

export default Layout;