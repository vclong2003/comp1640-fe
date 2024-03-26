import { ILoginPayload, IUser } from "../../interfaces/user.interfaces";
import { axiosInstance } from "../../lib/axios.lib";

const login = async (payload: ILoginPayload): Promise<IUser> => {
  return await axiosInstance.post("/auth/login", payload);
};

const getCurrentUser = async (): Promise<IUser> => {
  return await axiosInstance.get("/user/my-profile");
};

export default { login, getCurrentUser };
