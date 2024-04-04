import { configureStore } from "@reduxjs/toolkit";
import userState from "./user";
import facultyState from "./faculty";
import eventState from "./event";

const store = configureStore({
  reducer: {
    [userState.name]: userState.reducer,
    [facultyState.name]: facultyState.reducer,
    [eventState.name]: eventState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
