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
  password: 'password'
})

@room1 = user.rooms.new({
  name: 'テスト物件１',
  name_kana: 'てすとぶっけん１',
  zip_code: '000-0000',
  prefecture: 32,
  city: '出雲市',
  address1: '上塩冶町2664番地3',
  address2: 'マルエフガーデン2F',
  maximum_capacity: 40,
  price: 50000,
  description: 'ここは○○で...'
})

@room2 = user.rooms.new({
  name: 'テスト物件２',
  name_kana: 'てすとぶっけん２',
  zip_code: '000-0000',
  prefecture: 32,
  city: '出雲市',
  address1: '江田町40-1',
  maximum_capacity: 100,
  price: 100000,
  description: 'ここは○○で...'
})

@room3 = user.rooms.new({
  name: 'テスト物件３',
  name_kana: 'てすとぶっけん３',
  zip_code: '141-0031',
  prefecture: 13,
  city: '品川区',
  address1: '西五反田8-1-2',
  address2: '第2平森ビル4階',
  maximum_capacity: 20,
  price: 150000,
  description: '昼ごはんには困りません'
})

@room1.holidays.new({
  type: 'Holiday',
  target_date: '2022-09-16'
})

@room1.reserveds.new({
  type: 'Reserved',
  target_date: '2022-09-16'
})

@room2.holidays.new({
  type: 'Holiday',
  target_date: '2022-09-16'
})

@room2.reserveds.new({
  type: 'Reserved',
  target_date: '2022-09-16'
})

@room3.holidays.new({
  type: 'Holiday',
  target_date: '2022-09-16'
})

@room3.reserveds.new({
  type: 'Reserved',
  target_date: '2022-09-16'
})

user.save
p 'テストデータを保存しました'