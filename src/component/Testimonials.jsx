"use client";

const testimonials = [
  {
    name: "Rahim Uddin",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    destination: "Maldives",
    comment:
      "Amazing experience! Everything was perfectly arranged. The beach resort was beyond expectations.",
  },
  {
    name: "Sarah Khan",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    destination: "Bali",
    comment:
      "Great service and smooth booking process. Loved the Bali trip arrangements!",
  },
  {
    name: "John Smith",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    destination: "Swiss Alps",
    comment:
      "One of the best trips of my life. Stunning views and professional guides.",
  },
  {
    name: "Ayesha Rahman",
    image: "https://i.pravatar.cc/100?img=15",
    rating: 4,
    destination: "Paris",
    comment:
      "Very well organized tour. Hotel location was perfect and travel support was helpful.",
  },
];

// ⭐ Stars component
function Stars({ rating }) {
  return (
    <div className="flex gap-1 text-yellow-400 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

const  Testimonials=() =>{
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 ">
      <div className="w-full mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            What Our Travelers Say
          </h1>
          <p className="text-gray-500 mt-2">
            Real experiences from our happy travelers
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Trip to {t.destination}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <Stars rating={t.rating} />

              {/* Comment */}
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                "{t.comment}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;