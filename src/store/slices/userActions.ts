import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginPayload } from "../../interfaces/user.interfaces";
import userService from "../../service/api/user";

export const getCurrentUser = createAsyncThunk(
  "userState/getCurrentUser",
  async () => {
    return await userService.getCurrentUser();
  },
);

export const login = createAsyncThunk(
  "userState/login",
  async (payload: ILoginPayload) => {
    return await userService.login(payload);
  },
);

export const logout = createAsyncThunk("userState/logout", async () => {
  return await userService.logout();
});
