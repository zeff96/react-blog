import React, { useState } from 'react'
import { useGetCommentsQuery, usePostCommentMutation } from '../redux/api/comment/comment'

const CommentModal = (postId) => {
  const[body, setBody] = useState('')

  const{data} = useGetCommentsQuery(postId)
  const[postComment] = usePostCommentMutation(postId)

  const comments = data

  const addPost = async(e) => {
    e.preventDefault()
    try {
      await postComment({body}).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {comments.map((comment) => (
        <p>{comment.body}</p>
      ))}
      <hr />
      <form onSubmit={addPost}>
        <textarea name="body" placeholder='write a comment' value={body} onChange={(e) => setBody(e.target.value)} >
          <button type="submit">send</button>
        </textarea>
      </form>
    </div>
  )
}

export default CommentModal