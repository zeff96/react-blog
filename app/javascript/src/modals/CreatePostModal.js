import React, { useState } from 'react';
import AddPostForm from '../components/AddPostForm';
import styles from './CreatePostModal.module.css';

const CreatePostModal = () => {
  const [show, setShow] = useState(false);

  return (
    <section className={styles.section}>
      <button
        type='button'
        className={styles['btn-modal']}
        onClick={() => setShow(true)}
      >
        Add Post
      </button>
      <div className={`${styles.myModal} ${show ? styles.show : ''}`}>
        <div className={styles['modal-content']}>
          <div className={styles['modal-header']}>
            <h2>Add new Post</h2>
            <span
              onClick={() => setShow(false)}
              className={styles['btn-close']}
            >
              &times;
            </span>
          </div>
          <hr />
          <div className={styles['modal-body']}>
            <AddPostForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePostModal;
