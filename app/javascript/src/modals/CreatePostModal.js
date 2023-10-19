import React, { useState } from 'react';
import AddPostForm from '../components/AddPostForm';
import styles from './CreatePostModal.module.css';

const CreatePostModal = () => {
  const [show, setShow] = useState(false);

  const modalClasses = [styles.myModal];

  if (show) {
    modalClasses.push(styles.show);
  }

  return (
    <section className={styles.section}>
      <button
        type='button'
        className={styles['btn-modal']}
        onClick={() => setShow(true)}
      >
        Add Post
      </button>
      <div className={styles.myModal}>
        <div>
          <div className='modal-header'>
            <h2>Add new Post</h2>
            <span onClick={() => setShow(false)}>&#10060;</span>
          </div>
          <div className='modal-body'>
            <AddPostForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePostModal;
