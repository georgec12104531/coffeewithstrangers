class AddZipToCoffeeTimes < ActiveRecord::Migration[5.2]
  def change
    add_column :coffee_times, :zip, :string
  end
end
