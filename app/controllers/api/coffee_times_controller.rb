class Api::CoffeeTimesController < ApplicationController

  def index
    @coffee_times = CoffeeTime.all
    render :index
  end

  def create
    @coffee_time = CoffeeTime.new(coffee_time_params)

    if @coffee_time.save
      render "/api/coffee_times/show"
    else
      render json: @coffee_time.errors.full_messages, status: 422
    end
  end

  def update
    @coffee_time = CoffeeTime.find(params[:id])
    if @coffee_time.update_attributes(coffee_time_params)
      render "/api/coffee_times/show"
    else
      render json: @coffee_time.errors.full_messages, status: 422
    end
  end

  def show
    @coffee_time = CoffeeTime.find(params[:id])
    render :show
  end

  def destroy
    @coffee_time = CoffeeTime.find(params[:id])
    @coffee_time.destroy
  end

  def coffee_time_params
    params.require(:coffee_time).permit(:date, :address, :introduction, :host_id, :location_id)
  end

end
