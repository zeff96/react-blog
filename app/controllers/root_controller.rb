class RootController < ApplicationController
  skip_before_action :authenticate_token!
  def index
  end
end
