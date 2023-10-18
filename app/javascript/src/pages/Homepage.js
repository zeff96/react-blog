import React, { useState } from 'react';
import './Homepage.css';
import CreatePostModal from '../modals/CreatePostModal';
import PostList from './PostList';

const Homepage = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button type='button' className='btn-modal' id='myBtn'>
        Add Post
      </button>
      <CreatePostModal />
      <PostList />
    </>
  );
};

export default Homepage;
