class Api::V1::PostsController < ApplicationController
  skip_before_action :authenticate_token, only: %i[index, show]
  before_action :set_post, only: %i[edit, update, destroy]

  def index
    @posts = Post.all
    render json: @posts
  end

  def new
    @post = current_user.posts.build
    render json: @post
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      render json: {post: @post, message: "Post created successfully"}, status: :created
    else
      render json: {error: @post.errors.full_message}, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @post = current_user.posts.update(post_params)
    if @post.save
      render json: {post: @post, message: "Post update successfully!"}
    else
      render json: {error: @post.errors.full_message}, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render json: {message: "Post deleted successfully!"}
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end