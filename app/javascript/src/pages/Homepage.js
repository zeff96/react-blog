import React from 'react';
import './Homepage.css';
import CreatePostModal from '../modals/CreatePostModal';
import PostList from './PostList';

const Homepage = () => {
  return (
    <>
      <CreatePostModal />
      <PostList />
    </>
  );
};

export default Homepage;
