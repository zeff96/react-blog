import React from 'react';
import { useGetPostsQuery } from '../redux/api/posts/postSlice';
import Post from '../components/Post';
import styles from './PostList.module.css';

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

  const listPosts = orderPosts.map((post) => (
    <Post key={post?.id} post={post} />
  ));
  return (
    <div className={styles['post-container']}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}
      {isSuccess && <div>{listPosts}</div>}
    </div>
  );
};

export default PostList;
