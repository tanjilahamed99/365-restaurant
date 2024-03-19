import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'https://bistro-server-ten.vercel.app'
})


const UsePublicAxios = () => {
    return publicAxios
};

export default UsePublicAxios;