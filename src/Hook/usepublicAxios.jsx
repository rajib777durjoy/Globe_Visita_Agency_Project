import axios from 'axios';
import React from 'react';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true
});
const usepublicAxios = () => {
    return instance;
};

export default usepublicAxios;