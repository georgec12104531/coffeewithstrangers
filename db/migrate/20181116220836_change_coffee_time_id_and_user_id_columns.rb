class ChangeCoffeeTimeIdAndUserIdColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :coffee_time_attendances, :user_id, :integer
    remove_column :coffee_time_attendances, :coffee_time_id, :integer
    add_column :coffee_time_attendances, :user_id, :integer
    add_column :coffee_time_attendances, :coffee_time_id, :integer
  end
end
