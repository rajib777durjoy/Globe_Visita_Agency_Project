"use client";
import { tourList } from "@/app/DummyData/page";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const BookingDetailsPage = () => {
  const params = useParams();
  const id = parseInt(params?.id);
  const [singleData, setSingleData] = useState(null);
  const router= useRouter()

  useEffect(() => {
    const data = tourList.find((item) => item?.id === id);
    setSingleData(data);
  }, [id]);

  if (!singleData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-6 flex flex-col items-center text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Card */}
      <motion.div
        className="bg-white shadow-xl rounded-xl max-w-3xl w-full p-6 md:p-10 flex flex-col md:flex-row gap-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden">
          <img
            src={singleData.image}
            alt={singleData.placeName}
            className="w-full h-full object-cover"
          />
        </div>

     
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{singleData.placeName}</h1>
            <p className="text-gray-600 mb-4">{singleData.about}</p>
            <p className="mb-2">
              <span className="font-semibold">Duration:</span> {singleData.duration}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Date:</span> {singleData.date}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Price:</span> ${singleData.price}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Review:</span> {singleData.review}⭐
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>{
               router.back() 
            }}
            className="mt-4 px-6 py-3 text-center flex items-center mx-auto bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
           <span><FaArrowLeft className=" mx-1" /></span>
             Back
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookingDetailsPage;
