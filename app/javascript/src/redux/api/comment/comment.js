import { apiSlice } from "../apiSlice";

const commentSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getComments: build.query({
      query: (postId) => `posts/${postId}/comments`
    }) 
  })
})