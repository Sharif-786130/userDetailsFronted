import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/authslice";
import {usersApi} from '../Features/users/userApi';

export const store = configureStore({
    reducer:{
        auth:authReducer,
        [usersApi.reducerPath] : usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});
