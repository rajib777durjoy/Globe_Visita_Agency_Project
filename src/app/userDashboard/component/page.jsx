'use client'
import useAxiosSecure from "@/Hook/useAxios";
import React, { useEffect, useState } from "react";


const OverviewCards = () => {
  const [stats, setStats] = useState({
    totalItems: 0,
    totalUsers: 0,
    revenue: 0,
    orders: 0,
  });
const AxiosSecure = useAxiosSecure()
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await AxiosSecure.get("/api/dashboard/stats");

        setStats(res.data);
      } catch (error) {
        console.log("Error fetching stats:", error.message);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      {/* Total Items */}
      <div className="bg-white shadow rounded-xl p-5">
        <h2 className="text-gray-500">Total Items</h2>
        <p className="text-3xl font-bold text-blue-600">
          {stats.totalItems}
        </p>
      </div>

      {/* Total Users */}
      <div className="bg-white shadow rounded-xl p-5">
        <h2 className="text-gray-500">Total Users</h2>
        <p className="text-3xl font-bold text-green-600">
          {stats.totalUsers}
        </p>
      </div>

      {/* Revenue */}
      <div className="bg-white shadow rounded-xl p-5">
        <h2 className="text-gray-500">Revenue</h2>
        <p className="text-3xl font-bold text-purple-600">
          ${stats.revenue}
        </p>
      </div>

      {/* Orders */}
      <div className="bg-white shadow rounded-xl p-5">
        <h2 className="text-gray-500">Orders</h2>
        <p className="text-3xl font-bold text-orange-500">
          {stats.orders}
        </p>
      </div>

    </div>
  );
};

export default OverviewCards;