# frozen_string_literal: true

FactoryBot.define do
  factory :room_image do
    room { nil }
    image_path { 'MyString' }
    display_order { 1 }
  end
end
