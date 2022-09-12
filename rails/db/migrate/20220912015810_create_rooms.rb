class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.references :user, null: false, foreign_key: true, comment: 'ユーザーID'
      t.string :name, null: false, comment: '物件名'
      t.string :name_kana, null: false, comment: '物件名_かな'
      t.string :zip_code, null: false, comment: '物件_郵便番号'
      t.integer :prefecture, null: false, comment: '物件_都道府県'
      t.string :city, null: false, comment: '物件_市区町村'
      t.string :address1, null: false, comment: '物件_町名番地'
      t.string :address2, comment: '物件_建物・部屋番号・その他'
      t.integer :maximum_capacity, null: false, comment: '最大人数'
      t.integer :price, null: false, comment: '値段'
      t.text :description, comment: '説明'
      t.boolean :is_public, null: false, default: false, comment: '公開フラグ'

      t.timestamps
    end
  end
end
