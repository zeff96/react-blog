import React from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>
        {post.content.length > 100
          ? `${post.content.substring(0, 100)}...`
          : post.content}
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
