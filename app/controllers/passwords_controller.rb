class PasswordsController < ApplicationController
  def reset_password
    user = User.find_by(email: params[:user][:email])

    if user
      user.generate_password_reset_token
      UseMailer.password_reset(user).deliver_later
      render json: { message: "Password reset instructions sent" }, status: :ok
    else
      render json: { error: "User not found!" }, status: :not_found
    end
  end

  def update_password
    user = User.find_by(password_reset_token: params[:user][:password_reset_token])

    if user && user.password_reset_token_valid?
      user.update(
        password: params[:user][:password],
        password_confirmation: params[:user][:password_confirmation],
        password_reset_token: nil,
        password_reset_token_expires_at: nil
      )

      render json: { message: "Password reset successfull" }, status: :ok

    else
      render json: { error: "Invalid token or failed update" }, status: :unauthorized
    end
  end
end
