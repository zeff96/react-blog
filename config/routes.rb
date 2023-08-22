Rails.application.routes.draw do
  root "root#index"

  post '/signup', to: "registrations#create"
  post '/login', to: "authentication#create"
  post '/reset_password', to: "passwords#reset_password"
  put '/update_password', to: "passwords#update_password"
end
