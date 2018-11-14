class AddAddress2ToCofeeTimes < ActiveRecord::Migration[5.2]
  def change
    add_column :coffee_times, :address2, :string
  end
end
