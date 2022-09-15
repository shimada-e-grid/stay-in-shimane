class Room < ApplicationRecord
  belongs_to :user
  has_many :room_images
  has_many :holidays
  has_many :reserveds
end
