import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../lib/axios.lib";
import { API_BASE_URL } from "../../config/api.config";
import { ERole } from "../../variables/user.variables";
import { buildQueryString } from "../../utils/string.utils";
import { IUser } from "../../interfaces/user.interfaces";

export const login = createAsyncThunk(
  "userState/login",
  async (payload: { email: string; password: string }) => {
    await axios.post(API_BASE_URL + "/auth/login", payload, {
      withCredentials: true,
    });
  },
);

export const getCurrentUser = createAsyncThunk(
  "userState/getCurrentUser",
  async () => {
    const response = await axiosInstance.get("/auth");
    return response.data as IUser;
  },
);

export const updateProfile = createAsyncThunk(
  "userState/updateProfile",
  async (payload: Partial<IUser>) => {
    const response = await axiosInstance.put("/user/my-profile", payload);
    return response.data;
  },
);

interface IFindAllUsersPayload {
  name?: string;
  role?: ERole;
  email?: string;
  facultyId?: string;
  skip?: number;
  limit?: number;
}
export const findAllUsers = createAsyncThunk(
  "userState/findAllUsers",
  async (payload: IFindAllUsersPayload) => {
    const response = await axiosInstance.get(
      "/user" + buildQueryString(payload as { [key: string]: unknown }),
    );
    return response.data;
  },
);

export const getUserById = createAsyncThunk(
  "userState/getUserById",
  async (id: string) => {
    const response = await axiosInstance.get(`/user/${id}`);
    return response.data as IUser;
  },
);
