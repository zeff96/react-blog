class RegistrationsController < ApplicationController
  def create
    if user_exists?(sign_up_params[:email])
      render json: { error: 'Email already taken!' }, status: :unprocessable_entity
    else
      user = User.new(sign_up_params)
      render json: { message: 'User created successfully!', token: JsonWebToken.encode({ sub: user.id }) }, status: :created
    else
      render json: { error: 'Failed to create user' }, status: :unprocessable_entity
    end
  end

  protected

  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def user_exists?(email)
    User.exists?(email:)
  end
end