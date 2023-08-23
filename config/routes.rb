Rails.application.routes.draw do
  root "root#index"

  post '/signup', to: "registrations#create"
  post '/login', to: "authentication#create"
  post '/reset_password', to: "passwords#create"
  get '/reset_password/edit', to: "passwords#edit", as: edit_password_reset
  put '/update_password', to: "passwords#update"
end
