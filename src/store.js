import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartSlice from "./App_old/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
  },
});
