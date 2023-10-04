import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    createUser: builder.mutation({
      query: (formData) => ({
        url: '/api/v1/signup',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = apiSlice;
