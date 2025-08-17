"use client";
import React, { useEffect, useState } from "react";
import { getToPreviousId } from "../lib/localStorage";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Booking_list = () => {
    const [bookings, setBookings] = useState([]);
    const router=useRouter()
    useEffect(() => {
        const data = getToPreviousId();
        const showBooklist = [...data]
        console.log('showBooklist:', showBooklist)
        setBookings(data);
    }, []);
  const handleMoreDetails=(id)=>{
    router.push(`/Booking_list/${id}`);
  }
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-black mb-5 ">Your Bookings</h1>
  <hr className="text-black my-5"/>
            {bookings.length === 0 ? (
                <p className="text-center text-gray-500">No bookings found.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {bookings.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between cursor-pointer"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-black">
                                {item.title || `Booking ID: ${item}`}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                This is your booked tour with ID {item}.
                            </p>
                            <div className="flex justify-between items-center">
                                <button onClick={()=>handleMoreDetails(item)} className="btn px-4 py-2 text-white font-semibold bg-green-600 rounded hover:bg-green-700"> More</button>
                                <button
                                    className="mt-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                    onClick={() => {
                                        const newBookings = bookings.filter((b) => b !== item);
                                        console.log('newbookings', newBookings)
                                        localStorage.setItem("book_list", JSON.stringify(newBookings));
                                        setBookings(newBookings);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Booking_list;
