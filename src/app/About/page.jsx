"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="min-h-screen py-10 md:py-16 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="w-full mx-auto text-center mb-14 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Voyzen Travel
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl">
          Discover the world with comfort, confidence, and unforgettable experiences
        </p>
      </div>

      {/* Who We Are */}
      <motion.div
        className="w-full mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Who We Are
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          <b>Voyzen Travel</b> is a modern travel agency dedicated to making
          your journeys smooth, affordable, and unforgettable. We connect
          travelers with the most beautiful destinations around the world —
          from tropical beaches to mountain adventures and cultural city tours.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          Our mission is to simplify travel planning through smart technology,
          curated packages, and 24/7 support — ensuring every trip feels
          effortless and enjoyable.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="w-full mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Vision
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          To become a global travel platform that inspires people to explore
          the world without barriers. We aim to redefine travel experiences by
          combining technology, trust, and personalized service.
        </p>
      </motion.div>

      {/* History */}
      <motion.div
        className="w-full mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Journey
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Voyzen Travel started with a simple idea — travel should be easy,
          accessible, and stress-free for everyone. What began as a small idea
          has grown into a platform helping travelers discover amazing
          destinations worldwide.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Today, Voyzen Travel continues to grow with a focus on innovation,
          customer satisfaction, and unforgettable travel experiences.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
