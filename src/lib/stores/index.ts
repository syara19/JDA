import { configureStore } from "@reduxjs/toolkit";
import { cartSlcie } from "./cart";
import { themeSlice } from "./theme";

export const store = configureStore({
  reducer: {
    cart: cartSlcie.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
