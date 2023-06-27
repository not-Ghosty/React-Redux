import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
const estore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default estore;
