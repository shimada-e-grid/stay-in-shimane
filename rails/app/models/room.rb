# frozen_string_literal: true

class Room < ApplicationRecord
  belongs_to :user

  has_many :room_images
  has_many :room_calendars
  has_many :holidays
  has_many :reserveds
end
