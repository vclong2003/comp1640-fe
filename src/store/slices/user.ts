import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user.interfaces";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api.config";
import axios from "axios";
import { axiosInstance } from "../../lib/axios.lib";

const name = "userState";
const initialState: IUserState = {
  user: null,
  users: [],
};

const login = createAsyncThunk(
  `${name}/login`,
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      await axios.post(API_BASE_URL + API_ENDPOINTS.LOGIN, payload, {
        withCredentials: true,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const getCurrentUser = createAsyncThunk(
  `${name}/getCurrentUser`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.GET_USER);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

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
