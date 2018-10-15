class CreateCoffeeTimeAttendence < ActiveRecord::Migration[5.2]
  def change
    create_table :coffee_time_attendence do |t|
      t.integer :user_id, null: false
      t.integer :coffee_time_id, null: false

      t.timestamps
    end

    add_index :coffee_time_attendence, :user_id, unique: true
    add_index :coffee_time_attendence, :coffee_time_id, unique: true
  end
end
