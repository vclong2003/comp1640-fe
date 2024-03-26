import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user.interfaces";
import { getCurrentUser, login, logout } from "./userActions";

export const name = "userState";
const initialState: IUserState = {
  user: null,
  users: [],
};

const userState = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export default userState;
