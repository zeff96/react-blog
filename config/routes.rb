Rails.application.routes.draw do
  get '*path', to: 'root#index', constraints: ->(request) { !request.xhr? && request.format.html? }

  post '/signup', to: "registrations#create"
  post '/login', to: "authentication#create"
  post '/reset_password', to: "passwords#create"
  get '/reset_password/edit', to: "passwords#edit"
  put '/update_password', to: "passwords#update"
end
