import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";
import categoriesReducer from "../slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReduser,
    categories: categoriesReducer,
  },
});
