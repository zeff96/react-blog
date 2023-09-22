class API::v1::PostsController < ApplicationController
  def index
  end

  def new
    @post = current_user.posts.build
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end