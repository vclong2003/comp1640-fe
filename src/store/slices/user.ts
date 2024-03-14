import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user.interfaces";

const name = "userState";
const initialState: IUserState = {
  user: null,
  users: [],
  error: "",
};

const userState = createSlice({
  name,
  initialState,
  reducers: {},
});

export default userState;
