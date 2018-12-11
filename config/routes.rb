Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :locations, only: [:create, :index]

    resources :coffee_times, only: [:index, :create, :show, :update, :destroy] do
      resources :coffee_time_attendances, only: [:create]
    end

    resources :coffee_time_attendances, only: [:update, :destroy, :index]

  end

  root to: "static_pages#root"
end
