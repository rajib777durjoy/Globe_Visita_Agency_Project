import React from "react";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-xl p-5">
          <h2 className="text-gray-500">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,250</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-3xl font-bold text-green-600">320</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-3xl font-bold text-purple-600">$12,450</p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">

          <li>✔ New user registered</li>
          <li>✔ Order #1024 completed</li>
          <li>✔ New item added</li>
          <li>✔ Report generated</li>

        </ul>
      </div>

    </div>
  );
};

export default AdminDashboard;