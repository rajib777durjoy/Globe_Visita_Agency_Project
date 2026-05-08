
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.example.com",
    withCredentials: true,
});

const useAxios = () => {
    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
            // handle logout user  //
        }

        return Promise.reject(error)
    });

    return instance;
};

export default useAxios;