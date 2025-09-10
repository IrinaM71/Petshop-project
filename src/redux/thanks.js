import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const responce = await axios.get(`http://localhost:3333/categories/all`);
    return responce.data;
  }
);
