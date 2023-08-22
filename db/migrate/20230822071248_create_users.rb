class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :password_reset_token
      t.datetime :password_reset_token_expires_at
      t.string :remember_me_token
      t.datetime :remember_me_token_expires_at

      t.timestamps
    end
  end
end
