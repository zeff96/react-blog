import React from 'react';
import './Homepage.css';
import AddPostForm from '../components/AddPostForm';
import PostList from './PostList';

const Homepage = () => {
  return (
    <>
      <AddPostForm />
      <PostList />
    </>
  );
};

export default Homepage;
