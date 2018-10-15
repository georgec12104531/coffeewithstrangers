class RemoveCreateLocationsFromLocations < ActiveRecord::Migration[5.2]
  def change
    remove_column :locations, :CreateLocations, :string
  end
end
