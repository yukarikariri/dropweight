Rails.application.routes.draw do
  get 'weights/index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'weights#index' 
  resources :weights, only: [:show, :new, :create]
  resources :motions, only: [:new, :create]
  resources :waters, only: [:new, :create]
end
