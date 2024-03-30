import {
  IChangePasswordPayload,
  IGuestRegisterPayload,
  ILoginPayload,
  IUpdateUserPayload,
  IUser,
} from "@interfaces/user.interfaces";
import { axiosInstance } from "@lib/axios.lib";

const login = async (payload: ILoginPayload): Promise<IUser> => {
  return await axiosInstance.post("/auth/login", payload, {
    headers: { "X-Required-Auth": false },
  });
};

const guestRegister = async (payload: IGuestRegisterPayload): Promise<void> => {
  return await axiosInstance.post("/auth/guest-register", payload);
};

const logout = async (): Promise<void> => {
  return await axiosInstance.post("/auth/logout");
};

const getCurrentUser = async (): Promise<IUser> => {
  return await axiosInstance.get("/user/my-profile");
};

const changePassword = async (
  payload: IChangePasswordPayload,
): Promise<void> => {
  return await axiosInstance.put("/auth/password", payload);
};

const updateUser = async (payload: IUpdateUserPayload): Promise<IUser> => {
  return await axiosInstance.put("/user/my-profile", payload);
};

export default {
  login,
  guestRegister,
  getCurrentUser,
  logout,
  updateUser,
  changePassword,
};
