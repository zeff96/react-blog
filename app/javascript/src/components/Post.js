"use client"

import React, {useState} from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const[show, setShow] = useState(false)

  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>
        {show ? post.content : `${post.content.substring(0, 100)}...`}
        {post.content.length > 100 && (
          <button>
            {show ? 'show less' : 'show more'}
          </button>
        )}
      </p>
      <div>
        <button>
          '' {post.likes_counter}
        </button>
        <button>
          {post.comments_counter} comments
        </button>
      </div>
    </div>
  );
};

export default Post;
