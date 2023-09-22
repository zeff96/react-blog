Rails.application.routes.draw do
  root "root#index"
  get '*path', to: 'root#index', constraints: ->(request) { !request.xhr? && request.format.html? }

  post '/signup', to: "registrations#create"
  post '/login', to: "authentication#create"
  post '/reset_password', to: "passwords#create"
  get '/reset_password/edit', to: "passwords#edit"
  put '/update_password', to: "passwords#update"

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end
