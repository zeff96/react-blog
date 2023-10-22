import React from 'react';
import './Homepage.css';
import CreatePostModal from '../modals/CreatePostModal';
import PostList from './PostList';
import { selectAuthToken } from '../redux/features/authSlice';

const Homepage = () => {
  return (
    <>
      {selectAuthToken && <CreatePostModal />}
      <PostList />
    </>
  );
};

export default Homepage;
