class CreateRoomImages < ActiveRecord::Migration[7.0]
  def change
    create_table :room_images do |t|
      t.references :room, null: false, foreign_key: true, comment: '物件ID'
      t.string :image_path, null: false, comment: 'ファイルパス'
      t.integer :display_order, comment: '表示順'

      t.timestamps
    end
  end
end
