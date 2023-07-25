import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    addNewPost: builder.mutation({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddNewPostMutation } = apiSlice;
