'use client'

import React, { useEffect, useState } from 'react';
import { tourList } from '../DummyData/page';
import { motion } from 'framer-motion';
import { FiHeart } from "react-icons/fi";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { GrSort } from "react-icons/gr";
const Tours = () => {
  const [Tourlist, setTourlist] = useState(tourList);
  const [SearchText,setSearchText]=useState('');
  const router = useRouter();
  const handleTourId = (id) => {
    router.push(`Tours/${id}`);
  }
  const handleSortAscending = () => {
    const sorted = [...Tourlist].sort((a, b) => a.price - b.price);
    setTourlist(sorted);
  }
  const handleSortDescending = () => {
    const sorted = [...Tourlist].sort((a, b) => b.price - a.price);
    setTourlist(sorted);
  }
 useEffect(() => {
  if (!SearchText) {
    setTourlist(tourList); 
    return;
  }
  const regex = new RegExp(SearchText, "i");
  const searchFilter = tourList.filter((item) => regex.test(item?.placeName));
  setTourlist(searchFilter);
}, [SearchText]);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-5">

      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🌍 Explore Our Tours
      </h1>
      <div className='w-[90%] mx-auto flex justify-between gap-4 my-5'>
        <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder='Search by Country' className=' px-4 border text-black border-green-500 rounded-md w-[80%]' />
        <details className="dropdown z-10">
          <summary className="btn m-1 rounded-md"><GrSort />Filter</summary>
          <ul className="menu dropdown-content bg-green-700  rounded-box z-1  shadow-sm">
            <li onClick={() => handleSortAscending()} className='text-white font-medium  rounded-md my-2 hover:bg-green-600 p-2'> Ascending</li>
            <li onClick={() => handleSortDescending()} className='text-white font-medium rounded-md hover:bg-green-600 p-2 '> Descending</li>
          </ul>
        </details>
      </div>
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
                <h2 className="text-lg font-semibold text-gray-900">{tour?.placeName}</h2>
                <p className="text-sm  text-gray-600 mb-2">{tour?.about}</p>
                <p className="text-sm text-black"><span className="font-medium text-black/70">Duration:</span> {tour?.duration}</p>
                <p className="text-sm text-black"><span className="font-medium text-black/70">Date:</span> {tour?.date}</p>
                <p className="text-sm text-black"><span className="font-medium text-black/70">Price:</span> ${tour?.price}</p>
                <p className="text-sm text-yellow-600"><span className="font-medium">Reviews:</span> ⭐ {tour?.review}</p>
                <div className='flex text-white font-semibold justify-between items-center my-4'>
                  <button onClick={() => handleTourId(tour?.id)} className='btn p-2 hover:bg-green-700 bg-green-600  rounded-md'>View Details</button>
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
