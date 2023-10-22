import React from 'react';
import './Homepage.css';
import CreatePostModal from '../modals/CreatePostModal';
import PostList from './PostList';
import { selectAuthToken } from '../redux/features/authSlice';
import { useAppSelector } from '../redux/features/hook';

const Homepage = () => {
  const token = useAppSelector(selectAuthToken);
  return (
    <>
      {token && <CreatePostModal />}
      <PostList />
    </>
  );
};

export default Homepage;
