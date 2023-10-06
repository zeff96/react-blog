class Api::V1::LikesController < ApplicationController
  def new
    @like = @post.likes.build
    @like.user = current_user

    render json: @like
  end
end