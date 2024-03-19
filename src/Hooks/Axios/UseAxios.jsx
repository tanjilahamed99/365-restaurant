import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'https://bistro-server-ten.vercel.app'
})

const UseAxios = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        if (status === 401 || status === 403) {
            navigate('/login')
            await logout()
        }
        return Promise.reject(error);
    });

    return axiosSecure
};

export default UseAxios;