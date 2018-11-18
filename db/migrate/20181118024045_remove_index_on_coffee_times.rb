class RemoveIndexOnCoffeeTimes < ActiveRecord::Migration[5.2]
  def change
    remove_index :coffee_times, column: :host_id
    remove_index :coffee_times, column: :location_id
  end
end
