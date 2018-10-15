class Api::LocationsController < ApplicationController

  def create
    @location = Location.new(location_params)

    if @location.save
      render "api/locations/index"
    else
      render json: @location.errors.full_messages
    end
  end

  def index
    @locations = Location.all
  end


  def location_params
    params.require(:location).permit(:name)
  end


end
