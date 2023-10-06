Rails.application.routes.draw do
  root "root#index"
  get '*path', to: 'root#index', constraints: ->(request) { !request.xhr? && request.format.html? }

  namespace :api do
    namespace :v1 do
      resources :posts do
        resources :comments
        resources :likes
      end
      resources :users, only: [:index]

      post '/signup', to: "registrations#create"
      post '/login', to: "authentication#create"
      post '/reset_password', to: "passwords#create"
      get '/reset_password/edit', to: "passwords#edit"
      put '/update_password', to: "passwords#update"
    end
  end
end
