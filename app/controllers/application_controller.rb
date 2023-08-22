class ApplicationController < ActionController::Base
  attr_reader :current_user
  before_action :authenticate_token!

  private

  def authenticate_token!
    payload = JsonWebtoken.decode(auth_token)
    @current_user = User.find(payload["sub"])
  rescue JWT::ExpiredSignature
    render json: { error: "Auth token has expired" }, status: :unauthorized
  rescue JWT::DecodeError
    render json: { error: "Invalid auth token" }, status: :unauthorized
  end

  def auth_token
    @auth_token ||= request.headers.fetch("Authorization", "").split(" ").last
  end
end
