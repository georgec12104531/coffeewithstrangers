class ModifyCoffeeTimeAttendance < ActiveRecord::Migration[5.2]
  def change
    rename_table :coffee_time_attendance, :coffee_time_attendances
  end
end
