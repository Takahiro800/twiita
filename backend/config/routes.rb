Rails.application.routes.draw do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        omniauth_callbacks: 'overrides/omniauth_callbacks',
		registratins: 'users/registrations',
		sesstions: 'users/sessions'
      }

  namespace :api do
    namespace :v1 do
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
