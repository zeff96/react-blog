class AuthenticationController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])

    if user&.authenticate(params[:user][:password])
      render json: { message: 'Logged in successfully!', token: JsonWebToken.encode({ sub: user.id }) }, status: :ok
    else
      render json: { error: 'Incorrect email or password' }, status: :unauthorized
    end
  end
end
