require "csv"
require 'date'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.new({
  display_name: 'テストユーザー１',
  display_image: '',
  last_name: 'テスト',
  first_name: '太郎',
  tel: '0000-00-0000',
  date_of_birth: '2000-1-1',
  gender: nil,
  uid: 'test1@example.com',
  email: 'test1@example.com',
  password: 'password',
  confirmed_at: Time.now
})

CSV.foreach('db/seeds/csv/address_list.csv', headers: true) do |row|
  @room = user.rooms.new({
    name: "#{row['住所2']} #{row['住所3']}の空き家",
    name_kana: "#{row['住所カナ2']} #{row['住所カナ3']}ノアキヤ",
    zip_code: row['郵便番号'],
    prefecture: 32,
    city: row['住所2'],
    address1: row['住所3'],
    address2: row['番地'],
    maximum_capacity: rand(1..10),
    price: rand(5000..10000).floor(-2),
    description: 'ここは○○で...',
  })

  (Date.parse("2022-10-01")..Date.parse("2022-11-30")).to_a.sample(30).each do |date|
    @room.reserveds.new({
      type: 'Reserved',
      target_date: date.to_s
    })
  end

  # seq = row['連番'].to_i
  
  # @room.room_images.new({
  #   image_path: File.open("public/exterior/ex_#{seq.to_s}.jpg"),
  #   display_order: 1
  # })

  # @room.room_images.new({
  #   image_path: File.open("public/interior/it_#{seq * 2 - 1}.jpg"),
  #   display_order: 2
  # })

  # @room.room_images.new({
  #   image_path: File.open("public/interior/it_#{seq * 2}.jpg"),
  #   display_order: 3
  # })
end

user.save
p 'テストデータを保存しました'