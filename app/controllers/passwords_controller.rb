class PasswordsController < ApplicationController
  def reset_password
    user = User.find_by(email: params[:user][:email])

    if user
      user.generate_password_reset_token
      render json: { message: "Password reset instructions sent" }, status: :ok
    else
      render json: { error: "User not found!" }, status: :not_found
    end
  end
end
