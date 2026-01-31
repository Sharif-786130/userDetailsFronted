import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        token:null,
        status:"idle",
        error:null,
    },
    reducers:{
        logout:(state) =>{
            state.token = null;
            state.error = null;
            state.status = "idle"
        },
    },
    extraReducers: (builder) =>{
        builder
            .addCase(loginUser.pending, (state) =>{
                state.status = "loading";
                state.error=null;
            })
            .addCase(loginUser.fulfilled,(state,action) =>{
                state.token = action.payload.token;
                state.status = "Success";
                state.error=null;
            })
            .addCase(loginUser.rejected, (state,action) => {
                state.status ="failed";
                state.error = action.payload || "Invalid email or password"
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;