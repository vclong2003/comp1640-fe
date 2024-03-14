import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../config/api.config";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshToken();
      return axios(originalRequest);
    }
    return Promise.reject(error);
  },
);

const refreshToken = async () => {
  await axiosInstance.get(API_ENDPOINTS.ACCESS_TOKEN);
};
