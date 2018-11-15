# == Schema Information
#
# Table name: coffee_times
#
#  id           :bigint(8)        not null, primary key
#  date         :date             not null
#  address      :string           not null
#  topics :string           not null
#  capacity     :integer
#  host_id      :integer          not null
#  location_id  :integer          not null
#  seats_left   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null

class CoffeeTime < ApplicationRecord

  validates :date, :address, :topics, :host_id, :location_id, presence: true

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :location,
  foreign_key: :location_id,
  class_name: :Location

  has_many :coffee_time_attendees,
  foreign_key: :coffee_time_id,
  class_name: :CoffeeTimeAttendance

  has_many :users,
  through: :coffee_time_attendees,
  source: :user

end
