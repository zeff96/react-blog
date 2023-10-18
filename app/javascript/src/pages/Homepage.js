import React from 'react';
import './Homepage.css';
import AddPostForm from '../components/AddPostForm';
import PostList from './PostList';

const Homepage = () => {
  return (
    <>
      <button type='button' className='btn-modal' id='myBtn'>
        Add Post
      </button>
      <AddPostForm />
      <PostList />
    </>
  );
};

export default Homepage;
