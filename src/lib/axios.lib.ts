import { API_BASE_URL } from "@config/api.config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      try {
        await getNewAccessToken();
      } catch (error) {
        console.log("Get new access token failed!");
        return Promise.reject(error);
      }
      originalRequest._retry = true;
      return axiosInstance(originalRequest);
    }

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong!";

    return Promise.reject(message);
  },
);

const getNewAccessToken = async () => {
  console.log("Getting new access token!");
  await axios.get(`${API_BASE_URL}/auth/access-token`, {
    withCredentials: true,
  });
};
