class ChangeCoffeeTimeAttendenceToCoffeeTimeAttendance < ActiveRecord::Migration[5.2]
  def change
     rename_table :coffee_time_attendence, :coffee_time_attendance
  end
end
