class Api::V1::AuthenticationController < ApplicationController
  skip_before_action :authenticate_token!
  
  def create
    user = User.find_by(email: params[:user][:email])

    if user&.authenticate(params[:user][:password])
      if params[:user][:remember_me_token] == 'true'
        user.generate_remember_me_token
      end
      render json: { 
        message: 'Logged in successfully!', 
        user: UserSerializer.new(user), 
        token: JsonWebToken.encode({ sub: user.id }) 
      }, status: :ok
    else
      render json: { 
        error: 'Incorrect email or password' 
      }, status: :unauthorized
    end
  end
end
