class Api::V1::PostsController < ApplicationController
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
      render json: @post
    else
      render json: {error: "Failed to create post!"}
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end