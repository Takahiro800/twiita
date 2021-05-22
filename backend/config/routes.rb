Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :create, :destroy]
      resources :favorites, only: [:index]
      resources :timelines, only: [:index]
    end
  end
end
