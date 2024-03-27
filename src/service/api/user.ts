import { ILoginPayload, IUser } from "@interfaces/user.interfaces";
import { axiosInstance } from "@lib/axios.lib";

const login = async (payload: ILoginPayload): Promise<IUser> => {
  return await axiosInstance.post("/auth/login", payload, {
    headers: { "X-Required-Auth": false },
  });
};

const getCurrentUser = async (): Promise<IUser> => {
  return await axiosInstance.get("/user/my-profile");
};

const logout = async (): Promise<void> => {
  return await axiosInstance.post("/auth/logout");
};

export default { login, getCurrentUser, logout };
