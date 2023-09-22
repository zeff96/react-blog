class Api::v1::PostsController < ApplicationController
  def index
  end

  def new
    @post = current_user.posts.build
  end

  def create
    @post = current_user.post.build(post_params)
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
end