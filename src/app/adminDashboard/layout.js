
import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-5 hidden md:block">
                <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

                <nav className="space-y-4 text-gray-300">

                    <a href="/admin/overview" className="block hover:text-white">
                        📊 Overview
                    </a>

                    <a href="/adminDashboard/component/usermanage" className="block hover:text-white">
                        👤 Manage Users
                    </a>

                    <a href="/adminDashboard/component/AddData" className="block hover:text-white">
                        📦 Manage Items
                    </a>

                    <a href="/admin/reports" className="block hover:text-white">
                        📈 Reports
                    </a>

                    <a href="/adminDashboard/component/Category" className="block hover:text-white">
                        🗂️ Categories
                    </a>

                    <a href="/admin/settings" className="block hover:text-white">
                        ⚙️ Settings
                    </a>

                </nav>
            </aside>

            {/* Main Area */}
            <div className="flex-1 flex flex-col">

                {/* Topbar */}
                <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

                    <h2 className="text-xl font-semibold text-gray-700">
                        Dashboard
                    </h2>

                    <div className="flex items-center gap-3">
                        <span className="text-gray-600">Admin</span>
                        {/* <img
                            src="https://i.pravatar.cc/40"
                            alt="admin"
                            className="w-10 h-10 rounded-full"
                        /> */}
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