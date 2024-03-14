import { configureStore } from "@reduxjs/toolkit";
import userState from "./slices/user";

const store = configureStore({
  reducer: {
    [userState.name]: userState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
