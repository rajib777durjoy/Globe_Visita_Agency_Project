import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 w-full">
      
      <div className="w-[90%] mx-auto grid md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-sky-400">
            Voyzen Travel
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Explore the world with comfort and confidence. Voyzen Travel
            brings you curated tours, unforgettable experiences, and seamless
            booking solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-sky-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Tours" className="hover:text-sky-400 transition">
                Tours
              </Link>
            </li>
            <li>
              <Link
                href="/Booking_list"
                className="hover:text-sky-400 transition"
              >
                Booking List
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-sky-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-sky-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Contact Us
          </h3>

          <p className="text-gray-400">Email: support@voyzen.com</p>
          <p className="text-gray-400">Phone: +880 1581-677077</p>

          <p className="text-gray-400 mt-2">
            Address: Uttara, Dhaka, Bangladesh
          </p>

          {/* Social */}
          <div className="flex space-x-4 mt-5 text-lg">
            <a href="#" className="hover:text-sky-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <IoLogoLinkedin />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Voyzen Travel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;