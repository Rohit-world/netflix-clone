import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userslices"

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});
