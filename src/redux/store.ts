import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import audioReducer from "./slices/audioSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    auth: authReducer,
    user: userReducer,
    audio: audioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
