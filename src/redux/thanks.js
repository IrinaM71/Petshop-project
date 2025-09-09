import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = `http://localhost:3333/categories/all`;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const responce = await axios.get(`${BASE_URL}/breeds`);
    return responce.data;
  }
);
