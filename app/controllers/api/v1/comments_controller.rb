class Api::V1::CommentsController < ApplicationRecord
  before_action :set_post, only: %i[new create destroy]
  before_action :set_comment, only: [:destroy]
  
  def 
    @comment = @post.comments.build
    @comment.user = current_user

    render json: @comment
  end

  def create
    @comment = @post.comments.build(comments_param)
    @comment.user = current_user

    if @comment.save
      render json: {comment: @comment, message: 'Commented created successfully'}, status: :created
    else
      render json: {error: @comment.errors.full_message}, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    render head: no_content
  end

  private
  
  def comments_param
    params.require(:comment).permit(:body)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_post
    @post = Post.find(params[:id])
  end
end