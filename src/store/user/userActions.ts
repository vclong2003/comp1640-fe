import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IFindLoginSessionsPayload,
  IFindUsersPayload,
  ILoginPayload,
  IRemoveLoginSessionPayload,
  IUpdateUserPayload,
} from "@interfaces/user.interfaces";
import userService from "@service/api/user";

// Find users --------------------------------------------------
export const findUsers = createAsyncThunk(
  "userState/findUsers",
  async (payload: IFindUsersPayload) => {
    return await userService.findUsers(payload);
  },
);

// Get current user ---------------------------------------------
export const getCurrentUser = createAsyncThunk(
  "userState/getCurrentUser",
  async () => {
    return await userService.getCurrentUser();
  },
);

// Login --------------------------------------------------------
export const login = createAsyncThunk(
  "userState/login",
  async (payload: ILoginPayload) => {
    return await userService.login(payload);
  },
);

// Logout -------------------------------------------------------
export const logout = createAsyncThunk("userState/logout", async () => {
  return await userService.logout();
});

// Update user --------------------------------------------------
export const updateUser = createAsyncThunk(
  "userState/updateUser",
  async (payload: IUpdateUserPayload) => {
    return await userService.updateUser(payload);
  },
);

// Find login sessions ------------------------------------------
export const findLoginSessions = createAsyncThunk(
  "userState/findLoginSessions",
  async (payload: IFindLoginSessionsPayload) => {
    return await userService.findLoginSessions(payload);
  },
);

// Remove login session -----------------------------------------
export const removeLoginSession = createAsyncThunk(
  "userState/removeLoginSession",
  async (payload: IRemoveLoginSessionPayload) => {
    return await userService.removeLoginSession(payload);
  },
);
