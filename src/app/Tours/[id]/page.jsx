"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import useAxiosSecure from "@/Hook/useAxios";
import { data } from "motion/react-client";

const DetailsPage = () => {
  const params = useParams();
  const id = params?.id;

  const router = useRouter();
  const AxiosSecure = useAxiosSecure();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await AxiosSecure.get(
          `/api/tours/getTourlist/${id}`
        );

        setData(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchTour();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        No data found
      </div>
    );
  }
  const handleBook =(id)=>{
    const tourInfo ={image:data?.tourImage,placeName:data?.placeName,price:data?.price,duration:data?.duration}
    AxiosSecure.put(`/api/tours/tourBook/${id}`,tourInfo)

  }

  return (
    <motion.div
      className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-5 left-5 btn border w-[40px] h-[40px] flex justify-center items-center rounded-full text-black"
      >
        <FaArrowLeft />
      </button>

      {/* Card */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl grid md:grid-cols-2 gap-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Image */}
        <motion.img
          src={data?.tourImage}
          alt={data?.placeName}
          className="w-full h-80 md:h-[500px] object-cover"
          whileHover={{ scale: 1.05 }}
        />

        {/* Content */}
        <div className="flex flex-col justify-center p-6 space-y-4">

          <h1 className="text-3xl font-bold text-gray-800">
            {data?.placeName}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {data?.about}
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-700">

            <p>
              <span className="font-semibold">Date:</span>{" "}
              {data?.date}
            </p>

            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {data?.duration}
            </p>

            <p>
              <span className="font-semibold">Price:</span>{" "}
              ${data?.price}
            </p>

            <p>
              <span className="font-semibold">Review:</span> ⭐{" "}
              {data?.review}
            </p>

          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>handleBook(data?._id)}
            className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700"
          >
            Book Now
          </motion.button>

        </div>
      </motion.div>

    </motion.div>
  );
};

export default DetailsPage;