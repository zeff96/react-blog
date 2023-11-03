class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.references :user, null: false, foreign_key: true
      t.string :notification_type
      t.boolean :is_read, default: false, null: false
      t.references :source_user, foreign_key: {to_table: :users}, index: true
      t.references :source_post, foreign_key: {to_table: :posts}, index: true
      t.references :source_comment, foreign_key: {to_table: :comments}, index: true

      t.timestamps
    end
  end
end
