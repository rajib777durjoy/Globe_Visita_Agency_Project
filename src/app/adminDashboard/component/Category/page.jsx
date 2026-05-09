'use client'
import useAxiosSecure from "@/Hook/useAxios";
import React, { useEffect, useState } from "react";

const Category = () => {
    const [categories, setCategories] = useState([
        { name: "Adventure" },
        { name: "Beach" },
        { name: "Mountain" },
    ]);
    const [name, setname] = useState('')
    const AxiosSecure = useAxiosSecure();
    useEffect(() => {
        AxiosSecure.get('/api/tours/getCategory').then(res => {
            setCategories(res.data)
        })
    }, [])
    const handleAddCategory = () => {
        console.log('hello workefdfer')
        const category = name;
        console.log('cate',category)
        if (!category) {
            return;
        }
        AxiosSecure.post('/api/tours/addCategory', { name: category })
            .then(res => {
                console.log('add category::', res.data?.message)
            }).catch(err => {
                console.log(err.message)

            })

    }
    return (
        <div className="space-y-6">

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800">
                Manage Categories
            </h1>

            {/* Add Category */}
            <div className="bg-white shadow rounded-xl p-6 space-y-4">

                <h2 className="text-lg text-black font-semibold">
                    Add New Category
                </h2>

                <div className="flex flex-col md:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Category Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className="flex-1 border p-2 rounded text-black"
                    />

                    <button type="button" onClick={handleAddCategory} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Add Category
                    </button>

                </div>

            </div>

            {/* Category List */}
            <div className="bg-white shadow rounded-xl p-6">

                <h2 className="text-lg font-semibold mb-4">
                    Category List
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="border rounded-xl p-4 flex justify-between items-center"
                        >

                            <span className="font-medium">
                                {cat.name}
                            </span>

                            <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                                Delete
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default Category;