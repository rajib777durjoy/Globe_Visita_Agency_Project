"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Raktch Technology & Software
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Empowering businesses worldwide with cutting-edge technology solutions
        </p>
      </div>

      {/* Company Overview */}
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Raktch Technology & Software is a trailblazing technology company at
          the forefront of innovation, offering cutting-edge solutions to
          businesses worldwide. With a passion for disruptive technologies and a
          commitment to driving digital transformation, we empower our clients
          to thrive in the rapidly evolving digital landscape. Our focus on
          innovation, expertise, and customer-centricity sets us apart,
          enabling us to deliver unparalleled technology solutions tailored to
          the unique needs of each client.
        </p>
      </motion.div>

      {/* Company History */}
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Company History
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Established in 2021, Raktch Technology & Software has quickly emerged
          as a trusted provider of technology solutions. Our journey began with
          a vision to empower businesses with transformative technologies, and
          we have since grown into a reputable company known for our expertise,
          reliability, and customer-centric approach.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Today businesses of all sizes — from new startups to large enterprises
          — use our software platform to build and manage connected products.
          In 2022, Raktch released Smart and Automation Devices for different
          fields.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
