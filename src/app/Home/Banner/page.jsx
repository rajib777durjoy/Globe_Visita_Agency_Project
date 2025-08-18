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
                                <h2 className="text-6xl font-bold mb-2">{item.name}</h2>
                                <p className="text-lg">{item.title}</p>

                            </div>

                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
            <form  className='w-[80%] h-[50px] mx-auto grid grid-cols-5 text-black gap-4 translate-y-40 translate-x-32 z-20 absolute top-100 '>
                <div className=' flex items-center bg-white/60 rounded-sm py-2 col-span-3'>
                    <h2 className='py-4 mx-2 px-4'><FaMapMarkerAlt className='text-2xl' /></h2>
                    <div>
                        <h2>Loaction</h2>
                        <input type="text" name="category" placeholder='Where are you going?' className=' w-[350px] h-[30px] outline-0 rounded-md' />
                    </div>
                    
                </div>
               <div className=' flex items-center bg-white/60 rounded-sm py-2 col-span-1'>
                   
                    <div className='mx-4'>
                        <h2>Date</h2>
                        <input type="date" name="" placeholder='' className=' w-[100%] h-[30px] rounded-md outline-0' />
                    </div>
                    

                </div>
               <button type='submit' className='btn bg-green-400 hover:bg-white/60 rounded-4xl py-2 col-span-1'>
                    <div className='text-2xl text-center my-4'>Search</div>
                </button>
                
            </form>

        </div>
    );
};

export default Banner;