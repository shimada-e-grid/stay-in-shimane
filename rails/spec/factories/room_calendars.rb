FactoryBot.define do
  factory :room_calendar do
    room { nil }
    type { "" }
    target_date { "2022-09-15" }
  end
end
