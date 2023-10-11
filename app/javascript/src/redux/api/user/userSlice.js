import { apiSlice } from '../apiSlice';

const userSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (formData) => ({
        url: '/signup',
        method: 'POST',
        body: formData,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = userSlice;
