import { configureStore } from "@reduxjs/toolkit";
import image from "../slices/image";

export const store = configureStore({
  reducer: {
    image,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
