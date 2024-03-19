import axios from "axios";
import { API_BASE_URL } from "../config/api.config";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      // Check if this is the cesond retry
      try {
        await getNewAccessToken();
      } catch (error) {
        console.log("Get new access token failed!");
        return Promise.reject(error);
      }
      originalRequest._retry = true; // Mark as had been retried
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

const getNewAccessToken = async () => {
  console.log("Getting new access token!");
  await axios.get(API_BASE_URL + "/auth/access-token", {
    withCredentials: true,
  });
};
