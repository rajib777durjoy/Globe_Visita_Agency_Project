'use client'
import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-green-900 text-white shadow-lg w-[100%] sticky top-0 z-50">
            <div className="w-[90%] mx-auto ">
                <div className="flex justify-between items-center h-[64px]">
                    {/* Agency Name */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-2xl font-bold bg-clip-text text-transparent 
  bg-gradient-to-r from-green-300 via-green-400 to-green-500">
                                GlobeVista Agency
                            </span>

                        </Link>
                    </div>

                    {/* Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-green-300">Home</Link>
                        <Link href="/Tours" className="hover:text-green-300">Tours</Link>
                        <Link href="/Booking_list" className="hover:text-green-300">Booking_List</Link>
                        <Link href="/About" className="hover:text-green-300">About</Link>
                        <Link href="/Contact" className="hover:text-green-300">Contact</Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                        {/* menu Icon is here */}
                        <CiMenuFries className='text-3xl font-bold'/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu for mobile */}
            {isOpen && (
                <div className="md:hidden bg-green-800 px-4 pb-4 space-y-2">
                    <Link href="/" className="block hover:text-green-300">Home</Link>
                    <Link href="/Tours" className="block hover:text-green-300">Tours</Link>
                    <Link href="/Booking_list" className="block hover:text-green-300">Booking_List</Link>
                    <Link href="/About" className="block hover:text-green-300">About</Link>
                    <Link href="/Contact" className="block hover:text-green-300">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;