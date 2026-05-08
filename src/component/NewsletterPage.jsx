"use client";

import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!email.includes("@")) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
      
      <div className=" max-w-2xlw-full text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Get Exclusive Travel Deals ✈️
        </h1>

        <p className="text-gray-500 mt-3">
          Subscribe to our newsletter and receive latest travel packages, discounts, and destination guides.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
          >
            Subscribe
          </button>
        </form>

        {/* Status Messages */}
        {status === "invalid" && (
          <p className="text-red-500 mt-3 text-sm">
            Please enter a valid email address.
          </p>
        )}

        {status === "loading" && (
          <p className="text-blue-500 mt-3 text-sm">
            Subscribing...
          </p>
        )}

        {status === "success" && (
          <p className="text-green-500 mt-3 text-sm">
            Successfully subscribed! 🎉
          </p>
        )}

        {/* Extra Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-left">

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Exclusive Deals
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Get discounts before anyone else.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Travel Tips
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Expert guides for your next trip.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Early Access
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Book popular trips before they sell out.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}