import React, { useState } from 'react';
import './Homepage.css';
import AddPostForm from '../components/AddPostForm';
import PostList from './PostList';

const Homepage = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button type='button' className='btn-modal' id='myBtn'>
        Add Post
      </button>
      <div className='myModal' id='myModal'>
        <div className='modal-header'>
          <h2>Add new Post</h2>
          <span>&#10060;</span>
        </div>
        <div className='modal-body'>
          <AddPostForm />
        </div>
      </div>
      <PostList />
    </>
  );
};

export default Homepage;
