import {
  IChangePasswordPayload,
  IFindLoginSessionsPayload,
  IGuestRegisterPayload,
  ILoginPayload,
  ILoginSession,
  IRemoveLoginSessionPayload,
  IUpdateUserPayload,
  IUser,
} from "@interfaces/user.interfaces";
import { axiosInstance } from "@lib/axios.lib";
import { objectToFormData } from "@utils/data.utils";
import { buildQueryString } from "@utils/string.utils";

// Login --------------------------------------------------------
const login = async (payload: ILoginPayload): Promise<IUser> => {
  return await axiosInstance.post("/auth/login", payload, {
    headers: { "X-Required-Auth": false },
  });
};

// Guest register ------------------------------------------------
const guestRegister = async (payload: IGuestRegisterPayload): Promise<void> => {
  return await axiosInstance.post("/auth/guest-register", payload);
};

// Logout -------------------------------------------------------
const logout = async (): Promise<void> => {
  return await axiosInstance.post("/auth/logout");
};

// Get current user ---------------------------------------------
const getCurrentUser = async (): Promise<IUser> => {
  return await axiosInstance.get("/user/my-profile");
};

// Change password ----------------------------------------------
const changePassword = async (
  payload: IChangePasswordPayload,
): Promise<void> => {
  return await axiosInstance.put("/auth/password", payload);
};

// Update user --------------------------------------------------
const updateUser = async (payload: IUpdateUserPayload): Promise<IUser> => {
  return await axiosInstance.put(
    "/user/my-profile",
    objectToFormData({ ...payload }),
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
};

// Find login sessions ------------------------------------------
const findLoginSessions = async (
  payload: IFindLoginSessionsPayload,
): Promise<ILoginSession[]> => {
  const queryString = buildQueryString(payload as { [key: string]: unknown });
  return await axiosInstance.get(`/auth/login-session${queryString}`);
};

// Remove login session -----------------------------------------
const removeLoginSession = async (
  dto: IRemoveLoginSessionPayload,
): Promise<IRemoveLoginSessionPayload> => {
  const { sessionId } = dto;
  await axiosInstance.delete(`/auth/login-session/${sessionId}`);
  return dto;
};

// logout all sessions -----------------------------------------
const logoutAllDevices = async (): Promise<void> => {
  return await axiosInstance.post("/auth/logout-all");
};

export default {
  login,
  guestRegister,
  getCurrentUser,
  logout,
  updateUser,
  changePassword,
  findLoginSessions,
  removeLoginSession,
  logoutAllDevices,
};
