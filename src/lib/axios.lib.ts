import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../config/api.config";

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
    const httpErrorStatusCode = error.response.status;
    const isSecondRetry = originalRequest._retry; // Check if this is the cesond retry

    if (httpErrorStatusCode === 401 && !isSecondRetry) {
      try {
        await getNewAccessToken();
      } catch (error) {
        return Promise.reject(error);
      }
      originalRequest._retry = true; // Mark as had been retried
      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  },
);

const getNewAccessToken = async () => {
  await axios.get(API_BASE_URL + API_ENDPOINTS.ACCESS_TOKEN, {
    withCredentials: true,
  });
};
