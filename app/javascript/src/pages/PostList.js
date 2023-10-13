import React from 'react';
import { useGetPostsQuery } from '../redux/api/posts/postSlice';
import Post from '../components/Post';

const PostList = () => {
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const orderPosts = posts
    .slice()
    .sort((a, b) => a.created_at.localeCompare(b.created_at));
  return <div></div>;
};

export default PostList;
