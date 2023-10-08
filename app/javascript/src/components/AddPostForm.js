import React from 'react';

const AddPostForm = () => {
  return (
    <form action=''>
      <label htmlFor='title'>
        Title
        <input type='text' name='title' id='title' placeholder='Post title' />
      </label>
    </form>
  );
};

export default AddPostForm;
