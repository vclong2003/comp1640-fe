import { configureStore } from "@reduxjs/toolkit";
import userState from "./user/user";
import facultyState from "./faculty/faculty";
import eventState from "./event/event";

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
