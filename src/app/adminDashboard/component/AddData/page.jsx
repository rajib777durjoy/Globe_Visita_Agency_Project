"use client";

import useAxiosSecure from "@/Hook/useAxios";
import React, { useState } from "react";


const AddData = () => {
    const AxiosSecure = useAxiosSecure();

    const [form, setForm] = useState({
        placeName: "",
        about: "",
        date: "",
        image: null,
        duration: "",
        price: "",
        review: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setForm({
            ...form,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // ✅ FormData for file upload
            const formData = new FormData();
            formData.append("placeName", form.placeName);
            formData.append("about", form.about);
            formData.append("date", form.date);
            formData.append("image", form.image);
            formData.append("duration", form.duration);
            formData.append("price", form.price);
            formData.append("review", form.review);

            const res = await AxiosSecure.post("/api/tours/tourpost", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Success:", res.data);
            alert("Tour Added Successfully!");

            // reset
            setForm({
                placeName: "",
                about: "",
                date: "",
                image: null,
                duration: "",
                price: "",
                review: "",
            });

        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">

            <h1 className="text-2xl font-bold text-gray-800">
                Add New Tour Package
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded-xl p-6 space-y-4 text-black"
            >

                {/* Place Name */}
                <input
                    name="placeName"
                    value={form.placeName}
                    onChange={handleChange}
                    placeholder="Place Name"
                    className="w-full border p-2 rounded"
                />

                {/* About */}
                <textarea
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                    placeholder="Tour Description"
                    className="w-full border p-2 rounded"
                />

                {/* Date */}
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border text-black p-2 rounded"
                />

                {/* File Upload */}
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full border p-2 rounded"
                />

                {/* Duration */}
                <input
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    placeholder="Duration"
                    className="w-full border p-2 rounded"
                />

                {/* Price + Review */}
                <div className="grid grid-cols-2 gap-4">

                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="border p-2 rounded"
                    />

                    <input
                        type="number"
                        step="0.1"
                        name="review"
                        value={form.review}
                        onChange={handleChange}
                        placeholder="Review"
                        className="border p-2 rounded"
                    />

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Add Tour
                </button>

            </form>
        </div>
    );
};

export default AddData;