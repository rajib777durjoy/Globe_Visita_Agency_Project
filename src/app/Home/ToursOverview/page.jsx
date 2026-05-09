"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";
import useAxiosSecure from '@/Hook/useAxios';

const ToursOverview = () => {
  const [tourData, setTourData] = useState([]);
  const [value, setvalue] = useState("");
  const router = useRouter();

 const AxiosSecure= useAxiosSecure(); 
  useEffect(() => {
    AxiosSecure.get('/api/tours/getTourlist').then(res => {
      setTourData(res.data)
    })
  }, []);

  const handleTourId = (id) => {
    router.push(`Tours/${id}`);
  };

  const handleClick = () => {
    axios.post("/api/route.js", value);
  };

  return (
    <motion.div
      className="min-h-screen py-10 md:py-14 bg-gradient-to-b from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🌍 Popular Tours
      </motion.h1>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {tourData.slice(0, 6).map((tour, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer bg-white dark:bg-gray-800  dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="h-48 w-full bg-gray-200">
              <img
                src={tour?.tourImage}
                alt={tour?.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tour?.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1 mb-3">
                {tour?.about.slice(0, 70)}...
              </p>

              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-medium">Duration:</span>{" "}
                  {tour?.duration}
                </p>
                <p>
                  <span className="font-medium">Date:</span> {tour?.date}
                </p>
                <p>
                  <span className="font-medium">Price:</span> $
                  {tour?.price}
                </p>
                <p className="text-yellow-500">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    Reviews:
                  </span>{" "}
                  ⭐ {tour?.review}
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleTourId(tour?._id)}
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ToursOverview;

