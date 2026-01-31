import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api",
        prepareHeaders:(headers, { getState }) =>{
            const token = getState().auth.token;
            if(token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes:["Users"],

    endpoints: (builder) =>({
        getUsers: builder.query({
            query:() =>"/users",
            providesTags:["Users"],
        }),

        //GET user by id
        getUserById: builder.query({
            query:(id) => `/users/${id}`,
        }),
        //ADD User
        adduser:builder.mutation({
            query:(newUser) => ({
                url:'/users',
                method:"POST",
                body:newUser,
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useAdduserMutation,
} = usersApi;

