'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaMapMarkerAlt } from "react-icons/fa";


// swiper css style 
import 'swiper/css/navigation';
import 'swiper/css';
import './Banner.css'
import { sliderData } from './DummySilderData/page';
import Image from 'next/image';


const Banner = () => {
 

    return (
        <div className='w-[100%]  h-screen'>
            <Swiper navigation={true} modules={[Navigation]} className="w-[100%] h-[500px] relative">
                {
                    sliderData.map((item, index) => <SwiperSlide key={index} className='w-[100%] '>
                        <div
                            className="w-full h-full bg-cover bg-center "
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 text-white text-center">
                                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2">{item.name}</h2>
                                <p className="text-lg">{item.title}</p>

                            </div>

                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Banner; 
