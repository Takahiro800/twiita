Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        # omniauth_callbacks: 'overrides/omniauth_callbacks'
        omniauth_callbacks: 'api/v1/auth/omniauth_callbacks'
      }
      resources :articles do
        collection do
          get 'search'
        end
      end
      resources :favorites, only: [:index]
      resources :timelines, only: [:index]
    end
  end
end
