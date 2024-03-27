import {
  IGuestRegisterPayload,
  ILoginPayload,
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

const getCurrentUser = async (): Promise<IUser> => {
  return await axiosInstance.get("/user/my-profile");
};

const logout = async (): Promise<void> => {
  return await axiosInstance.post("/auth/logout");
};

export default { login, guestRegister, getCurrentUser, logout };
