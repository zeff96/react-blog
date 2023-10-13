import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        {post.content.length > 100
          ? `${post.content.substring(0, 100)}...`
          : post.content}
      </p>
    </div>
  );
};

export default Post;
