class CreateRoomCalendars < ActiveRecord::Migration[7.0]
  def change
    create_table :room_calendars do |t|
      t.references :room, null: false, foreign_key: true, comment: '物件ID'
      t.string :type, comment: 'カレンダータイプ'
      t.date :target_date, null: false, comment: '対象日'

      t.timestamps
    end
  end
end
