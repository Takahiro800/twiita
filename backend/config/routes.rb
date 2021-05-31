Rails.application.routes.draw do
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
