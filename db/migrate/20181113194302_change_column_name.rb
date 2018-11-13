class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :coffee_times, :introduction, :topics
  end
end
