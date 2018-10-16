




class CoffeeTimeAttendance < ApplicationRecord

  validates :user_id, :coffee_time_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :coffee_time,
  foreign_key: :coffee_time_id,
  class_name: :CoffeeTime

end
