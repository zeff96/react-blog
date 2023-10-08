import React from 'react';

const AddPostForm = () => {
  return (
    <form action=''>
      <label htmlFor='title'>
        Title
        <input type='text' name='title' id='title' placeholder='Post title' />
      </label>
      <label htmlFor='content'>
        Content
        <textarea
          name='content'
          id='content'
          placeholder='Post body'
        ></textarea>
      </label>
      <input type='submit' value='Create Post' />
    </form>
  );
};

export default AddPostForm;
