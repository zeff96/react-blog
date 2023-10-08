import React from 'react';
import './AddPostForm.css';

const AddPostForm = () => {
  return (
    <form action='' className='form'>
      <label htmlFor='title' className='form-label'>
        Title
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Post title'
          className='form-control'
        />
      </label>
      <label htmlFor='content' className='form-label'>
        Content
        <textarea
          name='content'
          id='content'
          placeholder='Post body'
          className='form-control'
        ></textarea>
      </label>
      <input type='submit' value='Create Post' className='btn' />
    </form>
  );
};

export default AddPostForm;
