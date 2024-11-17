// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/", // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Optional: Set content-type header
    // 'Authorization': 'Bearer yourToken' // If you need authentication tokens
  },
});

export default axiosInstance;
