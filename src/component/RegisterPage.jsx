'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import usepublicAxios from "@/Hook/usepublicAxios";
import {useState} from 'react';
import { useRouter } from "next/navigation";
const RegisterPage = () => {
    const useAxios = usepublicAxios();
    const [showpassword,setShowpassword]= useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const router = useRouter()
    const onSubmit = (data) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(data.password)) {
            return alert('password must be at least 6 characters and must be strong !')
        }
        if (data.password !== data.confirmPassword) {
            return alert('password and confirm password must be same !')
        }
        const userData={
            name:data?.name,
            email:data?.email,
            password:data?.password
        }
        useAxios.post('/api/auth/register',userData).then(res => {
            console.log('register result::',res.data?.message)
            router.replace('/')
        }).catch(err => {
            console.log('error', err.message)
        })
       console.log(data)
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">

            <motion.div
                className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md p-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Create Account
                    </h1>
                    <p className="text-gray-500 dark:text-gray-300 mt-2">
                        Join and explore amazing tours
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 outline-none"
                            {...register("name", { required: "Name is required" })}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 outline-none"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <div className='flex  rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 outline-none '>
                            <input
                                type={showpassword?"text":"password"}
                                {...register("password", { required: "Password is required" })}
                                placeholder="Create password"
                                className="w-full mt-1 px-4 py-3 outline-none bg-transparent "
                            />
                            
                            <button onClick={()=>setShowpassword(!showpassword)} className="mx-2 text-xs">{showpassword?"hide":"Show"}</button>
                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            {...register("confirmPassword", { required: "Please confirm your password" })}
                            className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 outline-none"
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <input
                            type="checkbox"
                            className="mt-1 accent-sky-500"
                            {...register('checkbox', { required: true })}
                        />
                        {errors.checkbox && (
                            <span className="text-red-500 text-sm">
                                {errors.checkbox.type === 'required' && 'You must agree to the terms'}
                            </span>
                        )}
                        <p>
                            I agree to the{" "}
                            <span className="text-sky-600 cursor-pointer hover:underline">
                                Terms & Conditions
                            </span>
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
                    >
                        Create Account
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-6">
                    Already have an account?{" "}
                    <Link href="/Login" className="text-sky-600 hover:underline cursor-pointer">
                        Login
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default RegisterPage;