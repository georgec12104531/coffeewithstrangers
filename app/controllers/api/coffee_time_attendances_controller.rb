class Api::CoffeeTimeAttendancesController < ApplicationController

  def create
    @coffee_time_attendance = CoffeeTimeAttendance.new(coffee_time_attendance_params)

    if @coffee_time_attendance.save
      render "api/coffee_time_attendance/show"
    else
      render json: @coffee_time_attendance.errors.full_messages, status: 422
    end
  end

  def show
    @coffee_time_attendance = CoffeeTimeAttendance.find(params[:id])
    render "api/coffee_time_attendance/show"
  end

  def update
    @coffee_time_attendance = CoffeeTimeAttendance.find(params[:id])
    if @coffee_time_attendance.update_attributes(coffee_time_attendance_params)
      render "api/coffee_time_attendance/show"
    else
      render json: @coffee_time_attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    @coffee_time_attendance = CoffeeTimeAttendance.find(params[:id])
    @coffee_time_attendance.destroy
  end

  def coffee_time_attendance_params
    params.require(:coffee_time_attendance).permit(:user_id, :coffee_time_id)
  end

end
