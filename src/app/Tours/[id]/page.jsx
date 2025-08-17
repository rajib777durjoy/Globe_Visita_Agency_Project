"use client";

import { tourList } from "@/app/DummyData/page";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { addToLocalStorage, getToPreviousId } from "@/app/lib/localStorage";

const DetailsPage = () => {
    const params = useParams();
    const id = parseInt(params?.id);
    const [data, setData] = useState([]);
    const router = useRouter();
    console.log('id', id)
    useEffect(() => {
        const data = tourList.filter((item) => item?.id === id)
        setData(data)
    }, [id])

    const handleBookingfunction = (book_id) => {
        console.log('book id::', book_id)
        addToLocalStorage(id)
    }

    return (<>

        <motion.div
            className="w-[100%]  min-h-screen flex justify-center items-center bg-gray-100 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <button onClick={() => {
                router.back()
            }} className='btn border w-[25px] h-[25px] p-1 hover:border-amber-400 cursor-pointer rounded-full text-black -translate-y-80'><FaArrowLeft /></button>
            {
                data.map((item,index) => <motion.div key={index}
                    className="bg-white  shadow-lg rounded-2xl overflow-hidden w-[90%] mx-auto grid md:grid-cols-2 gap-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Image Section */}
                    <motion.img
                        src={item?.image}
                        alt={item?.placeName}
                        className="w-full h-80 md:h-[500px] rounded-md object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Content Section */}
                    <div className="flex flex-col justify-center p-6 space-y-4">

                        <motion.h1
                            className="text-3xl font-bold text-gray-800"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {item?.placeName}
                        </motion.h1>
                        <motion.p
                            className="text-gray-600 leading-relaxed"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {item?.about}
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-4 text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p>
                                <span className="font-semibold">Date:</span> {item.date}
                            </p>
                            <p>
                                <span className="font-semibold">Duration:</span> {item.duration}
                            </p>
                            <p>
                                <span className="font-semibold">Price:</span> ${item.price}
                            </p>
                            <p>
                                <span className="font-semibold">Review:</span> ⭐ {item.review}
                            </p>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleBookingfunction(item?.id)}
                            className="mt-6 px-6 py-3 cursor-pointer bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
                        >
                            Book Now
                        </motion.button>
                    </div>
                </motion.div>)
            }

        </motion.div>
        
    </>

    );
};

export default DetailsPage;