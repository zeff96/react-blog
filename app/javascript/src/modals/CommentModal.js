import React from 'react'

const CommentModal = (postId) => {
  return (
    <div>
      <p>{Comment.body}</p>
      <hr />
      <form action="">
        <textarea name="body" placeholder='write a comment' >
          send
        </textarea>
      </form>
    </div>
  )
}

export default CommentModal