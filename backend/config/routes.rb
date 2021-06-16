Rails.application.routes.draw do

	devise_for :users, controllers: {
		omniauth_callbacks: 'users/omniauth_callbacks'
	}

  namespace :api do
    namespace :v1 do
			mount_devise_token_auth_for 'User', at: 'auth', controllers: {
				# omniauth_callbacks: 'users/omniauth_callbacks',
				omniauth_callbacks: 'overrides/omniauth_callbacks',
				registratins: 'users/registrations',
				sesstions: 'users/sessions'
				}
			get 'auth/twitter/callback' => 'users/omniauth_callbacks#twitter'
      resources :articles do
        collection do
          get 'search'
        end
      end
      resources :favorites, only: [:index]
      resources :timelines, only: [:index]
			get '/auth_test', to: 'auth_test#index'
    end
  end
end
