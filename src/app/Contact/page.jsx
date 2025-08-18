"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { initEmailJS, sendEmail } from "../lib/email";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  const onSubmit = async (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const response = await sendEmail(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      console.log("Email sent successfully:", response);
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-8 md:p-12 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className={`w-full p-4 border rounded-lg hover:outline-none hover:border-green-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Email is required" })}
            className={`w-full p-4 border rounded-lg hover:outline-none hover:border-green-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <textarea
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            className={`w-full p-4 border rounded-lg h-32 hover:outline-none hover:border-green-500 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <motion.button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;


