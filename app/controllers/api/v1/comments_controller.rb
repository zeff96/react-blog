class Api::V1::CommentsController < ApplicationRecord
  def 
    @comment = @post.comments.build
    @comment.user = current_user

    render json: @comment
  end
end