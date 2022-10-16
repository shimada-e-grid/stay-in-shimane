# frozen_string_literal: true

class RoomImage < ApplicationRecord
  mount_uploader :image_path, ImagePathUploader
  belongs_to :room
end
