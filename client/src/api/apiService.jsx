import axios from "axios";

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:0804/api",
  withCredentials: false,
});

apiService.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiService;
