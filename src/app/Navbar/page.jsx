"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FiSun, FiMoon } from "react-icons/fi";
import usepublicAxios from "@/Hook/usepublicAxios";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const useAxios= usepublicAxios();
    // apply dark mode class to html
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    const user = true;
    const handleLogout=async()=>{
     const res = await useAxios.post('/api/auth/logout',{email:user?.email})
     console.log(res.data?.message)
     /// here google logout function ///
    }
    return (
        <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md w-full sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">

            <div className="w-[90%] mx-auto">
                <div className="flex justify-between items-center h-[64px]">

                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                                Voyzen Travel
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 font-medium">
                        <Link href="/" className="hover:text-sky-500 transition">
                            Home
                        </Link>
                        <Link href="/Explore" className="hover:text-sky-500 transition">
                            Explore
                        </Link>
                        <Link href="/Booking_list" className="hover:text-sky-500 transition">
                            Booking
                        </Link>
                        <Link href="/About" className="hover:text-sky-500 transition">
                            About
                        </Link>
                        <Link href="/Contact" className="hover:text-sky-500 transition">
                            Contact
                        </Link>
                    </div>

                    {/* Right Side Controls */}
                    <div className="flex items-center gap-3">
                        <div className='hidden md:block'>
                            {
                                user ? <button onClick={handleLogout} className="hover:text-sky-500 transition">
                                    Logout
                                </button> : <Link href="/Login" className="hover:text-sky-500 transition">
                                    Login
                                </Link>
                            }

                        </div>
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
                        >
                            {darkMode ? (
                                <FiSun className="text-yellow-400 text-xl" />
                            ) : (
                                <FiMoon className="text-gray-700 text-xl" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2"
                        >
                            <CiMenuFries className="text-3xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-800">

                    <Link href="/" className="block hover:text-sky-500">
                        Home
                    </Link>
                    <Link href="/Explore" className="block hover:text-sky-500">
                        Explore
                    </Link>
                    <Link href="/Booking_list" className="block hover:text-sky-500">
                        Booking
                    </Link>
                    <Link href="/About" className="block hover:text-sky-500">
                        About
                    </Link>
                    <Link href="/Contact" className="block hover:text-sky-500">
                        Contact
                    </Link>
                    {
                        user ? <button onClick={handleLogout} className="hover:text-sky-500 transition">
                            Logout
                        </button> : <Link href="/Login" className="hover:text-sky-500 transition">
                            Login
                        </Link>
                    }

                </div>
            )}
        </nav>
    );
};

export default Navbar;