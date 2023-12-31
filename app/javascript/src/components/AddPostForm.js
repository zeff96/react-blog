import React, { useState } from 'react';
import styles from './AddPostForm.module.css';
import { useAddPostMutation } from '../redux/api/posts/postSlice';

const AddPostForm = () => {
  const [formValue, setFormValue] = useState({ title: '', content: '' });
  const [addPost, { isLoading }] = useAddPostMutation();

  const canSave =
    [formValue.title, formValue.content].every(Boolean) && !isLoading;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const postData = {
    post: {
      title: formValue.title,
      content: formValue.content,
    },
  };

  const clearInputs = () => {
    setFormValue({
      ...formValue,
      title: '',
      content: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addPost(postData).unwrap();
      clearInputs();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='title' className={styles['form-label']}>
        Title
        <input
          type='text'
          name='title'
          id='title'
          value={formValue.title}
          placeholder='Post title'
          className={styles['form-control']}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor='content' className={styles['form-label']}>
        Content
        <textarea
          name='content'
          id='content'
          value={formValue.content}
          placeholder='Post body'
          className={styles['form-control']}
          onChange={handleInputChange}
        ></textarea>
      </label>
      <input
        type='submit'
        value='Create Post'
        disabled={!canSave}
        className={styles.btn}
      />
    </form>
  );
};

export default AddPostForm;
