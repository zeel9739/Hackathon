import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3004",
    withCredentials : false,
    headers : {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',  
    }
});

export default axiosInstance;
