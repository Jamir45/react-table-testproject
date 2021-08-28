import axios from 'axios'

const axiosInstance = axios.create();

// Add a response interceptor
axiosInstance.interceptors.response.use(
   (response) => response,
   (error) => Promise.reject(error)
);

export default axiosInstance;