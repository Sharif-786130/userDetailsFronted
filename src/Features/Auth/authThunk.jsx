import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
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