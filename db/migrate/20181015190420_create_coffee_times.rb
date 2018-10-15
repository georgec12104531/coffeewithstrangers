class CreateCoffeeTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :coffee_times do |t|
      t.date :date, null: false
      t.string :address, null: false
      t.string :introduction, null: false
      t.integer :capacity
      t.integer :host_id, null: false
      t.integer :location_id, null: false
      t.integer :seats_left

      t.timestamps
    end

    add_index :coffee_times, :host_id, unique: true
    add_index :coffee_times, :location_id, unique: true
  end
end
