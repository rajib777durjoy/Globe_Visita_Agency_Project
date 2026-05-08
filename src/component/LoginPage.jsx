'use client'
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import usepublicAxios from "@/Hook/usepublicAxios";
import { FcGoogle } from "react-icons/fc";
 import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";
const Loginpage = () => {
   

const provider = new GoogleAuthProvider();
    const useAxios = usepublicAxios();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (!data.email || !data.password) {
            return alert("email and password are required !")
        }
        useAxios.post('/api/auth/login', data).then(res => {
            console.log('login result::', res.data?.message)
        }).catch(err => {
            console.log('error', err.message)
        })
        //  console.log(data)
    };
    const handleGoogleLogin=async()=>{
      signInWithPopup(auth, provider).then((res)=>{
        console.log('user',res.user);
      })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <motion.div
                className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-300 mt-2 mb-6">
                    Login to your account
                </p>
                <div onClick={handleGoogleLogin} className="flex w-[70%] mx-auto items-center justify-center text-center gap-2 px-4 py-2 border rounded-lg">
                    <FcGoogle size={22} />
                    Continue with Google
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 outline-none"
                            placeholder="Enter email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 outline-none"
                            placeholder="Enter password"
                        />
                    </div>
                    {/* Button */}
                    <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition">
                        Login
                    </button>
                    <p className="text-center text-gray-500 dark:text-gray-300">
                        Don't have an account?{' '}
                        <a href="/Register" className="text-sky-500 hover:underline">
                            Create Account
                        </a>
                    </p>
                </form>
            </motion.div>
        </div>
    );
};

export default Loginpage;