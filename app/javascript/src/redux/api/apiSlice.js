import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    signup: builder.mutation({
      query: (formData) => ({
        url: '/signup',
        method: 'POST',
        body: formData,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = apiSlice;
