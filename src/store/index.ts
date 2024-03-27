import { configureStore } from "@reduxjs/toolkit";
import userState from "./user/user";
import facultyState from "./faculty/faculty";

const store = configureStore({
  reducer: {
    [userState.name]: userState.reducer,
    [facultyState.name]: facultyState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
