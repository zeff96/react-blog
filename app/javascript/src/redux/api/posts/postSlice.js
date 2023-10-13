import { apiSlice } from '../apiSlice';

const postSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts', id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});
