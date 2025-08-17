"use client";
import { tourList } from "@/app/DummyData/page";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";


const ToursOverview = () => {
    const [tourData, setTourData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setTourData(tourList);
    }, []);
    console.log('tourData::', tourData)
     const handleTourId=(id)=>{
      router.push(`Tours/${id}`);
    }
    return (
        <motion.div
            className="min-h-screen bg-gray-100 p-6 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="text-4xl text-black font-bold text-center mb-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Popular Tours
            </motion.h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {tourData.slice(0, 6).map((tour, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl shadow-lg overflow-hidden bg-white border hover:shadow-2xl cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Tour Image */}
                        <div className="h-48 w-full bg-gray-200">
                            <img
                                src={tour?.image}
                                alt={tour?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Tour Content */}
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-900">{tour?.name}</h2>
                            <p className="text-sm  text-gray-600 mb-2">{tour?.about}</p>
                            <p className="text-sm text-black"><span className="font-medium text-black/70">Duration:</span> {tour?.duration}</p>
                            <p className="text-sm text-black"><span className="font-medium text-black/70">Date:</span> {tour?.date}</p>
                            <p className="text-sm text-black"><span className="font-medium text-black/70">Price:</span> ${tour?.price}</p>
                            <p className="text-sm text-yellow-600"><span className="font-medium">Reviews:</span> ⭐ {tour?.review}</p>
                            <div className='flex text-white font-semibold justify-between items-center my-4'>
                                <button onClick={() => handleTourId(tour?.id)} className='btn p-2 hover:bg-green-700 bg-green-600  rounded-md'>View Details</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ToursOverview;

