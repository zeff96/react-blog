class UserMailer < ApplicationMailer
  def password_reset(user)
    @user = user
    @url = "http://localhost:3000/reset_password?password_reset_token=#{@user.password_reset_token}"
    mail(to: @user.email, subject: "Password reset instructions")
  end
end
