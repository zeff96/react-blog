class Api::V1::LikesController < ApplicationController
  before_action :set_post, only: [:new, :create]
  def new
    @like = @post.likes.build
    @like.user = current_user

    render json: @like
  end

  def create
    @like = @post.likes.build
    @like.user = current_user

    if @like.save
      render json: {message: 'Like added successfully'}, status: :created
    else
      render json: {error: @like.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end
end