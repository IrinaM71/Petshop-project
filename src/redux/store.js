import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../slices/productsSlice";
import cartReducer from "../slices/cartSlice";
import categoriesReducer from "../slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReduser,
    categories: categoriesReducer,
  },
});
