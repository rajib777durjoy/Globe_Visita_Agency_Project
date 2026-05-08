"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I book a travel package?",
    answer:
      "You can easily book a package by selecting your destination, choosing dates, and clicking the 'Book Now' button. Then complete the payment process.",
  },
  {
    question: "Is flight included in the package?",
    answer:
      "Some packages include flights while others do not. You can check package details before booking.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking within the cancellation policy period. Refunds depend on the package terms.",
  },
  {
    question: "Do you provide travel guides?",
    answer:
      "Yes, most of our international packages include professional travel guides for a better experience.",
  },
  {
    question: "Is it safe to travel with your agency?",
    answer:
      "Absolutely. We ensure verified hotels, transport, and 24/7 customer support for all travelers.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl mb-3 overflow-hidden">
      
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 text-left"
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {faq.question}
        </span>
        <span className="text-xl text-gray-500">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 text-sm leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 mt-2">
            Everything you need to know before booking your trip
          </p>
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Still have questions?
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
}