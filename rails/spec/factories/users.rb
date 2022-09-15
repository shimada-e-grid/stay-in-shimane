FactoryBot.define do
  factory :user do
    email { 'MyString' }
    display_name { 'MyString' }
    display_image { 'MyString' }
    last_name { 'MyString' }
    first_name { 'MyString' }
    tel { 'MyString' }
    date_of_birth { 'MyString' }
    gender { 1 }
  end
end
