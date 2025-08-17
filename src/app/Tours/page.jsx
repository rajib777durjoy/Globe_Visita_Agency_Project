'use client'

import React, { useState } from 'react';
import { tourList } from '../DummyData/page';
import { motion } from 'framer-motion';
import { FiHeart } from "react-icons/fi";
import Link from 'next/link';
import { useRouter } from "next/navigation";
const Tours = () => {
  const [Tourlist, setTourlist] = useState(tourList);
    const router = useRouter();
    const handleTourId=(id)=>{
      router.push(`Tours/${id}`);
    }
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🌍 Explore Our Tours
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          Tourlist?.map((tour, index) => (
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
                  src={tour.image}
                  alt={tour.name}
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
                <div className='flex text-black justify-between items-center my-4'>
                    <button onClick={()=>handleTourId(tour?.id)} className='btn p-2 border-2 rounded-md'>View Details</button>
                    <span className='text-2xl hover:text-yellow-400'><FiHeart /></span>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default Tours;
