import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
       `${API_BASE_URL}/api/login`,
        credentials
      );
      return response.data;
    } catch (err) {

      // const message = 
      // err.response?.data?.message ||
      // err.response?.data ||
      // "Invalid email or password";
      return rejectWithValue(err.response.data);
    }
  }
);