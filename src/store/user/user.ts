import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user.interfaces";
import {
  findLoginSessions,
  getCurrentUser,
  login,
  logout,
  removeLoginSession,
  updateUser,
} from "./userActions";

export const name = "userState";
const initialState: IUserState = {
  user: null,
  users: [],
  loginSessions: [],
};

const userState = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get current user ---------------------------------------------
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    // Login --------------------------------------------------------
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    // Logout -------------------------------------------------------
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
    // Update user --------------------------------------------------
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    // Find login sessions ------------------------------------------
    builder.addCase(findLoginSessions.fulfilled, (state, action) => {
      state.loginSessions = action.payload;
    });
    // Remove login session -----------------------------------------
    builder.addCase(removeLoginSession.fulfilled, (state, action) => {
      state.loginSessions = state.loginSessions.filter(
        (session) => session._id !== action.payload.sessionId,
      );
    });
  },
});

export default userState;
