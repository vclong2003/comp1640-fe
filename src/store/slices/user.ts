import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user.interfaces";
import { getCurrentUser, login } from "./userActions";

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
  },
});

export default userState;
export { login, getCurrentUser };
