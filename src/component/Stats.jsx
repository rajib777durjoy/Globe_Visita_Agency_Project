"use client";

import { useEffect, useState } from "react";

const statsData = [
  { label: "Destinations", value: 120, icon: "🌍" },
  { label: "Trips Completed", value: 5400, icon: "✈️" },
  { label: "Happy Travelers", value: 3200, icon: "🧳" },
  { label: "5-Star Reviews", value: 1800, icon: "⭐" },
];
 const Stats = () =>{
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          if (count < statsData[i].value) {
            return count + Math.ceil(statsData[i].value / 50);
          }
          return statsData[i].value;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="w-full mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-gray-500 mt-2">
            Real numbers from our travel community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {counts[index]}+
              </h3>
              
              <p className="text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 export default Stats;