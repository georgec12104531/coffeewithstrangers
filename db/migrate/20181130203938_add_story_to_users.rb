class AddStoryToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :story, :string
    add_column :users, :introduction, :string
  end
end
