import { apiSlice } from "../apiSlice";

const commentSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getComments: build.query({
      query: (postId) => `posts/${postId}/comments`
    }),
    postComment: build.mutation({
      query:(postId, body) => ({
        url: `posts/${postId}/comments`,
        method: 'POST',
        body
      })
    })
  })
})

export const {useGetCommentsQuery, usePostCommentMutation} = commentSlice