import React from 'react';
import './AddPostForm.css';
import { useAddPostMutation } from '../redux/api/posts/postSlice';

const AddPostForm = () => {
  const [addPost, { isLoading }] = useAddPostMutation();

  const canSave = [title, content].every(Boolean) && !isLoading;

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
      <input
        type='submit'
        value='Create Post'
        disabled={!canSave}
        className='btn'
      />
    </form>
  );
};

export default AddPostForm;
