FactoryBot.define do
  factory :room do
    user { nil }
    name { "MyString" }
    name_kana { "MyString" }
    zip_code { "MyString" }
    prefecture { 1 }
    city { "MyString" }
    address1 { "MyString" }
    address2 { "MyString" }
    maximum_capacity { 1 }
    price { 1 }
    description { "MyText" }
    is_public { false }
  end
end
