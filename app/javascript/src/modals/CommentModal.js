import React, { useState } from 'react'
import { useGetCommentsQuery, usePostCommentMutation } from '../redux/api/comment/comment'

const CommentModal = (postId) => {
  const[body, setBody] = useState('')

  const{data, isLoading, isError, isSuccess, error} = useGetCommentsQuery(postId)
  const[postComment] = usePostCommentMutation(postId)

  const addPost = async() => {
    try {
      await postComment({body}).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p>{Comment.body}</p>
      <hr />
      <form action="">
        <textarea name="body" placeholder='write a comment' value={body} onChange={(e) => setBody(e.target.value)} >
          <button type="button" onClick={addPost}>send</button>
        </textarea>
      </form>
    </div>
  )
}

export default CommentModal