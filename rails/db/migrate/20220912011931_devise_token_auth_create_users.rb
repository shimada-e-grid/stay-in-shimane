class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[7.0]
  def change

    create_table :users do |t|
      t.string :display_name, comment: 'アカウント名'
      t.string :display_image, comment: 'アカウント画像'
      t.string :last_name, null: false, comment: '名字'
      t.string :first_name, null: false, comment: '名前'
      t.string :tel, null: false, comment: '電話番号'
      t.string :date_of_birth, null: false, comment: '生年月日'
      t.integer :gender, comment: '性別'

      ## Required
      t.string :provider, null: false, default: "email"
      t.string :uid, null: false, default: ""

      ## Database authenticatable
      t.string :email,              null: false, default: '', comment: 'メールアドレス'
      t.string :encrypted_password, null: false, default: '', comment: '暗号パスワード'

      ## Recoverable
      t.string   :reset_password_token, comment: 'リセットパスワードトークン'
      t.datetime :reset_password_sent_at, comment: 'リセットパスワード送信日時'

      ## Rememberable
      t.datetime :remember_created_at, comment: 'ログイン状態記憶'

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false, comment: 'サインイン回数'
      t.datetime :current_sign_in_at, comment: '直近ログイン時刻'
      t.datetime :last_sign_in_at, comment: '前回ログイン時刻'
      t.string   :current_sign_in_ip, comment: '直近ログイン接続元IP'
      t.string   :last_sign_in_ip, comment: '前回ログイン接続元IP'

      ## Confirmable
      t.string   :confirmation_token, comment: '確認トークン'
      t.datetime :confirmed_at, comment: '確認日時'
      t.datetime :confirmation_sent_at, comment: '確認送信日時'
      t.string   :unconfirmed_email, comment: '未確認メールアドレス' # Only if using reconfirmable

      ## Lockable
      t.integer  :failed_attempts, default: 0, null: false, comment: 'ログイン失敗回数' # Only if lock strategy is :failed_attempts
      t.string   :unlock_token, comment: 'アンロックトークン' # Only if unlock strategy is :email or :both
      t.datetime :locked_at, comment: 'ロック日時'

      ## Tokens
      t.text :tokens, comment: 'トークン'

      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, [:uid, :provider],     unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
    add_index :users, :unlock_token,         unique: true
  end
end
