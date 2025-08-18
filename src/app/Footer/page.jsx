import React from 'react';
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
    return (
        <footer className="bg-green-900 text-white py-10 w-[100%]">
            <div className="w-[90%] mx-auto grid md:grid-cols-3 gap-10">
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-green-300">GlobeVista Agency</h2>
                    <p className="mt-2 text-gray-200">
                        Explore the world with us. Professional tours and unforgettable experiences.
                    </p>
                </div>

                {/* Agency Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Agency Contact Links</h3>
                    <ul>
                        <li className="py-1 hover:text-green-300">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="py-1 hover:text-green-300">
                            <Link href="/Tours">Tours</Link>
                        </li>
                        <li className="py-1 hover:text-green-300">
                            <Link href="/Booking_list">Booking_list</Link>
                        </li>
                        <li className="py-1 hover:text-green-300">
                            <Link href="/About" >About</Link>
                        </li>
                        <li className="py-1 hover:text-green-300">
                            <Link href="/Contact" >Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info & Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                    <p className="text-gray-200">Email: careers@raktch.com</p>
                    <p className="text-gray-200">Phone:  +8801581-677077</p>
                    <p className="text-gray-200">Website:<Link href='www.raktch.com' target='blank' className='text-blue-400'> www.raktch.com</Link></p>
                    <p className="text-gray-200">Address:Sector 6, Road 5, House 20, 7th floor, Uttara, Dhaka, Bangladesh</p>

                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/raktchme" target='blank' className="hover:text-green-300">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/company/raktch-technology-software/?originalSubdomain=bd" target='blank' className="hover:text-green-300">
                            <IoLogoLinkedin />
                        </a>
                        <a href="https://x.com/Raktchme" target='blank' className="hover:text-green-300">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/raktchme" target='blank' className="hover:text-green-300">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@raktchme" target='blank' className="hover:text-green-300">
                           <IoLogoYoutube />
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-gray-300 border-t border-green-800 pt-4">
                &copy; {new Date().getFullYear()} GlobeVista Agency. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;