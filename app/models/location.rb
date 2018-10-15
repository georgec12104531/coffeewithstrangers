# == Schema Information
#
# Table name: locations
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Location < ApplicationRecord

  validates :name, presence: true

  has_many :coffee_times,
  foreign_key: :location_id,
  class_name: :CoffeeTime

end
