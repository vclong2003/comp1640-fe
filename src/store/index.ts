import { configureStore } from "@reduxjs/toolkit";
import userState from "./user";
import facultyState from "./faculty";
import eventState from "./event";
import contributionState from "./contribution";

const store = configureStore({
  reducer: {
    [userState.name]: userState.reducer,
    [facultyState.name]: facultyState.reducer,
    [eventState.name]: eventState.reducer,
    [contributionState.name]: contributionState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
