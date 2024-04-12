import {
  IChangePasswordPayload,
  ICreateUserPayload,
  IFindLoginSessionsPayload,
  IFindUsersPayload,
  IGetUserByIdPayload,
  IGuestRegisterPayload,
  ILoginPayload,
  ILoginSession,
  IRemoveLoginSessionPayload,
  IResetPasswordPayload,
  ISendResetPasswordEmailPayload,
  ISetupAccountPayload,
  IToggleUserPayload,
  IUpdateProfilePayload,
  IUser,
  IVerifyRegisterTokenPayload,
  IVerifyRegisterTokenResponse,
  IUpdateUserByIdPayload,
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

//Send reset password email -------------------------------------
const sendResetPasswordEmail = async (
  payload: ISendResetPasswordEmailPayload,
): Promise<void> => {
  return await axiosInstance.post("/auth/reset-password-email", payload);
};

// Reset password ------------------------------------------------
const resetPassword = async (payload: IResetPasswordPayload): Promise<void> => {
  return await axiosInstance.post("/auth/reset-password", payload);
};

// Find users --------------------------------------------------
const findUsers = async (payload: IFindUsersPayload): Promise<IUser[]> => {
  const queryString = buildQueryString(
    payload as unknown as { [key: string]: unknown },
  );
  return await axiosInstance.get(`/user${queryString}`);
};

// Get User By Id --------------------------------------------------
const getUserById = async (payload: IGetUserByIdPayload): Promise<IUser> => {
  return await axiosInstance.get(`/user/${payload.id}`);
};

// Update profile --------------------------------------------------
const updateProfile = async (
  payload: IUpdateProfilePayload,
): Promise<IUser> => {
  return await axiosInstance.put(
    "/user/my-profile",
    objectToFormData({ ...payload }),
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
};

// Update user by ID --------------------------------------------------
const updateUserById = async (
  payload: IUpdateUserByIdPayload,
): Promise<IUser> => {
  return await axiosInstance.put(
    `/user/${payload._id}`,
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

// Setup account ------------------------------------------------
const setupAccount = async (payload: ISetupAccountPayload): Promise<void> => {
  return await axiosInstance.post("/auth/setup-account", payload);
};

// Verify register token ----------------------------------------
const verifyRegisterToken = async (
  payload: IVerifyRegisterTokenPayload,
): Promise<IVerifyRegisterTokenResponse> => {
  return await axiosInstance.post("/auth/verify-register-token", payload);
};

// Send register email  -----------------------------------------
const sendRegisterEmail = async (payload: ICreateUserPayload) => {
  return await axiosInstance.post("/auth/register-email", payload);
};

// Disable user --------------------------------------------------
const disableUser = async (payload: IToggleUserPayload): Promise<void> => {
  return await axiosInstance.post(`/user/${payload.id}/disable`);
};

// Enable user ---------------------------------------------------
const enableUser = async (payload: IToggleUserPayload): Promise<void> => {
  return await axiosInstance.post(`/user/${payload.id}/enable`);
};

export default {
  login,
  guestRegister,
  getCurrentUser,
  logout,
  updateProfile,
  changePassword,
  findLoginSessions,
  removeLoginSession,
  logoutAllDevices,
  resetPassword,
  sendResetPasswordEmail,
  setupAccount,
  verifyRegisterToken,
  findUsers,
  sendRegisterEmail,
  getUserById,
  disableUser,
  enableUser,
  updateUserById,
};
