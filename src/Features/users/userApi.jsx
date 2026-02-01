// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const usersApi = createApi({
//     reducerPath: "usersApi",
//     baseQuery:fetchBaseQuery({
//         baseUrl:"/api",
//         prepareHeaders:(headers, { getState }) =>{
//             const token = getState().auth.token;
//             if(token) {
//                 headers.set("Authorization", `Bearer ${token}`);
//             }
//             return headers;
//         },
//     }),
//     tagTypes:["Users"],

//     endpoints: (builder) =>({
//         getUsers: builder.query({
//             query:() =>"/users",
//             providesTags:["Users"],
//         }),

//         //GET user by id
//         getUserById: builder.query({
//             query:(id) => `/users/${id}`,
//         }),
//         //ADD User
//         adduser:builder.mutation({
//             query:(newUser) => ({
//                 url:'/users',
//                 method:"POST",
//                 body:newUser,
//             }),
//             invalidatesTags: ["Users"],
//         }),
//     }),
// });

// export const {
//     useGetUsersQuery,
//     useGetUserByIdQuery,
//     useAdduserMutation,
// } = usersApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  MUST come from .env (Render backend URL)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api`, // ✅ Render backend
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  tagTypes: ["Users"],

  endpoints: (builder) => ({
    //  GET all users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),

    //  GET user by ID
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),

    //  ADD new user
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

//  Hooks
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
} = usersApi;