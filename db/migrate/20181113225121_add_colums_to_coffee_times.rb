class AddColumsToCoffeeTimes < ActiveRecord::Migration[5.2]
  def change
    add_column :coffee_times, :state, :string
    add_column :coffee_times, :city, :string
  end
end
