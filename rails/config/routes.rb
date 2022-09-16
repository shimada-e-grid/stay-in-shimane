Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      resources :rooms do
          resources :room_calendars, only: :index
      end
      resource :status, only: :show
      resource :users, only: [:create, :update] 
      namespace :host do
        resources :rooms
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
