class AddColumnsToCoffeeTimes < ActiveRecord::Migration[5.2]
  def change
    add_column :coffee_times, :start_time, :string
    add_column :coffee_times, :end_time, :string
  end
end
