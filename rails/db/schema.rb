# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_12_015810) do
  create_table "rooms", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false, comment: "ユーザーID"
    t.string "name", null: false, comment: "物件名"
    t.string "name_kana", null: false, comment: "物件名_かな"
    t.string "zip_code", null: false, comment: "物件_郵便番号"
    t.integer "prefecture", null: false, comment: "物件_都道府県"
    t.string "city", null: false, comment: "物件_市区町村"
    t.string "address1", null: false, comment: "物件_町名番地"
    t.string "address2", comment: "物件_建物・部屋番号・その他"
    t.integer "maximum_capacity", null: false, comment: "最大人数"
    t.integer "price", null: false, comment: "値段"
    t.text "description", comment: "説明"
    t.boolean "is_public", default: false, null: false, comment: "公開フラグ"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_rooms_on_user_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "display_name", comment: "アカウント名"
    t.string "display_image", comment: "アカウント画像"
    t.string "last_name", null: false, comment: "名字"
    t.string "first_name", null: false, comment: "名前"
    t.string "tel", null: false, comment: "電話番号"
    t.string "date_of_birth", null: false, comment: "生年月日"
    t.integer "gender", comment: "性別"
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "email", default: "", null: false, comment: "メールアドレス"
    t.string "encrypted_password", default: "", null: false, comment: "暗号パスワード"
    t.string "reset_password_token", comment: "リセットパスワードトークン"
    t.datetime "reset_password_sent_at", comment: "リセットパスワード送信日時"
    t.datetime "remember_created_at", comment: "ログイン状態記憶"
    t.integer "sign_in_count", default: 0, null: false, comment: "サインイン回数"
    t.datetime "current_sign_in_at", comment: "直近ログイン時刻"
    t.datetime "last_sign_in_at", comment: "前回ログイン時刻"
    t.string "current_sign_in_ip", comment: "直近ログイン接続元IP"
    t.string "last_sign_in_ip", comment: "前回ログイン接続元IP"
    t.string "confirmation_token", comment: "確認トークン"
    t.datetime "confirmed_at", comment: "確認日時"
    t.datetime "confirmation_sent_at", comment: "確認送信日時"
    t.string "unconfirmed_email", comment: "未確認メールアドレス"
    t.integer "failed_attempts", default: 0, null: false, comment: "ログイン失敗回数"
    t.string "unlock_token", comment: "アンロックトークン"
    t.datetime "locked_at", comment: "ロック日時"
    t.text "tokens", comment: "トークン"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "rooms", "users"
end
