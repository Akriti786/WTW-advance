import axios from "axios";

export const API = "https://movies-backend-2twf.onrender.com";

export const api = axios.create({
  baseURL: API,
  timeout: 60000,
});

// Optional: log errors
api.interceptors.response.use(
  res => res,
  err => {
    console.log("API ERROR:", err.message);
    return Promise.reject(err);
  }
);
