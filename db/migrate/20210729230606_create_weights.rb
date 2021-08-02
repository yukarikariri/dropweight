class CreateWeights < ActiveRecord::Migration[6.0]
  def change
    create_table :weights do |t|
      t.float        :weight,        null: false, precision:4, scale: 1
      t.datetime     :start_time,    null: false
      t.references   :user,          null: false, foreign_key: true
      t.timestamps
    end
  end
end
