Rails.application.routes.draw do
  root to: 'subs#index'
  resources :comments, only: [:create, :destroy]
  resources :subs, except: [:destroy]
  resources :posts, except: [:index] do
    resources :comments, only: [:new]
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
