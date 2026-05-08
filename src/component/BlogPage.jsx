"use client";

const blogs = [
  {
    title: "Top 10 Places to Visit in 2026",
    image: "https://source.unsplash.com/600x400/?travel,beach",
    category: "Guide",
    author: "Admin",
    date: "Jan 10, 2026",
    description:
      "Discover the most beautiful destinations you must visit this year for an unforgettable experience.",
  },
  {
    title: "How to Travel on a Budget",
    image: "https://source.unsplash.com/600x400/?travel,city",
    category: "Tips",
    author: "Travel Expert",
    date: "Feb 2, 2026",
    description:
      "Learn smart tips to travel the world without spending too much money.",
  },
  {
    title: "Best Beaches in Asia",
    image: "https://source.unsplash.com/600x400/?beach,ocean",
    category: "Destinations",
    author: "Admin",
    date: "Mar 5, 2026",
    description:
      "Explore the most stunning beaches in Asia with crystal clear water and white sand.",
  },
  {
    title: "Packing Guide for Long Trips",
    image: "https://source.unsplash.com/600x400/?luggage,travel",
    category: "Tips",
    author: "Guide Team",
    date: "Apr 1, 2026",
    description:
      "A complete packing checklist for stress-free international travel.",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 ">
      <div className="w-full mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Travel Blog
          </h1>
          <p className="text-gray-500 mt-2">
            Tips, guides & travel stories from around the world
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">

                {/* Category */}
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {blog.category}
                </span>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-3">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {blog.description}
                </p>

                {/* Meta */}
                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                {/* Button */}
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition">
            Load More Blogs
          </button>
        </div>

      </div>
    </section>
  );
}