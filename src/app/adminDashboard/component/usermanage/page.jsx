'use client'

import useAxiosSecure from "@/Hook/useAxios";
import React, { useEffect, useState } from "react";

const UserManage = () => {
    const AxiosSecure= useAxiosSecure()
//   const users = [
//     {
//       name: "John Doe",
//       email: "john@example.com",
//       role: "User",
//       status: "Active",
//     },
//     {
//       name: "Sarah Khan",
//       email: "sarah@example.com",
//       role: "Admin",
//       status: "Active",
//     },
//     {
//       name: "Mike Ross",
//       email: "mike@example.com",
//       role: "User",
//       status: "Inactive",
//     },
//   ];
  const [users,setusers]=useState([])
  useEffect(()=>{
   AxiosSecure.get('/api/user/alluser').then(res=>{
    setusers(res.data);
   })
  },[])

  return (
    <div className="space-y-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Manage Users
      </h1>

      {/* Table Card */}
      <div className="bg-white shadow rounded-xl p-4 md:p-6">

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-t">

                  <td className="p-3 font-medium">
                    {user.name}
                  </td>

                  <td className="p-3 text-gray-600">
                    {user.email}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="p-3 space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">

          {users.map((user, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 shadow-sm space-y-2"
            >

              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>

              <div className="flex gap-2 flex-wrap">

                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.role === "Admin"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {user.role}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>

              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-blue-500 text-white py-1 rounded">
                  View
                </button>
                <button className="flex-1 bg-red-500 text-white py-1 rounded">
                  Delete
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default UserManage;