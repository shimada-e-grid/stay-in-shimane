Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    namespace :v1 do
      resource :status, only: :show
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
