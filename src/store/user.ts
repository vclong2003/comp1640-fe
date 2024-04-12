import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IFindLoginSessionsPayload,
  IFindUsersPayload,
  ILoginPayload,
  IRemoveLoginSessionPayload,
  IToggleUserPayload,
  IUpdateProfilePayload,
  IUpdateUserByIdPayload,
  IUserState,
} from "@interfaces/user.interfaces";
import userService from "@service/user";

export const name = "userState";
const initialState: IUserState = {
  user: null,
  users: [],
  loginSessions: [],
  filter: {},
};

// Find users --------------------------------------------------
export const findUsers = createAsyncThunk(
  `${name}/findUsers`,
  async (payload: IFindUsersPayload) => {
    return await userService.findUsers(payload);
  },
);

// Get current user ---------------------------------------------
export const getCurrentUser = createAsyncThunk(
  `${name}/getCurrentUser`,
  async () => {
    return await userService.getCurrentUser();
  },
);

// Login --------------------------------------------------------
export const login = createAsyncThunk(
  `${name}/login`,
  async (payload: ILoginPayload) => {
    return await userService.login(payload);
  },
);

// Logout -------------------------------------------------------
export const logout = createAsyncThunk(`${name}/logout`, async () => {
  return await userService.logout();
});

// Update profile --------------------------------------------------
export const updateProfile = createAsyncThunk(
  `${name}/updateUser`,
  async (payload: IUpdateProfilePayload) => {
    return await userService.updateProfile(payload);
  },
);

// Update user by id --------------------------------------------------
export const updateUserById = createAsyncThunk(
  `${name}/updateUserById`,
  async (payload: IUpdateUserByIdPayload) => {
    return await userService.updateUserById(payload);
  },
);

// Find login sessions ------------------------------------------
export const findLoginSessions = createAsyncThunk(
  `${name}/findLoginSessions`,
  async (payload: IFindLoginSessionsPayload) => {
    return await userService.findLoginSessions(payload);
  },
);

// Remove login session -----------------------------------------
export const removeLoginSession = createAsyncThunk(
  `${name}/removeLoginSession`,
  async (payload: IRemoveLoginSessionPayload) => {
    return await userService.removeLoginSession(payload);
  },
);

// Disable user -------------------------------------------------
export const disableUser = createAsyncThunk(
  `${name}/disableUser`,
  async (payload: IToggleUserPayload) => {
    await userService.disableUser(payload);
    return payload;
  },
);

// Enable user --------------------------------------------------
export const enableUser = createAsyncThunk(
  `${name}/enableUser`,
  async (payload: IToggleUserPayload) => {
    await userService.enableUser(payload);
    return payload;
  },
);

const userState = createSlice({
  name,
  initialState,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
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
    // Update profile --------------------------------------------------
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    // Update user --------------------------------------------------
    builder.addCase(updateUserById.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = state.users.map((user) =>
        user._id === action.payload._id ? action.payload : user,
      );
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
    // Find users --------------------------------------------------
    builder.addCase(findUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    // Disable user -------------------------------------------------
    builder.addCase(disableUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload.id ? { ...user, disabled: true } : user,
      );
    });
    // Enable user --------------------------------------------------
    builder.addCase(enableUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload.id ? { ...user, disabled: false } : user,
      );
    });
  },
});

export default userState;
export const { setFilter } = userState.actions;
