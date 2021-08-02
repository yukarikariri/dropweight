class CreateWaters < ActiveRecord::Migration[6.0]
  def change
    create_table :waters do |t|
      t.float        :water,         null: false, precision:3, scale: 2
      t.datetime     :start_time,    null: false
      t.references   :user,          null: false, foreign_key: true
      t.timestamps
    end
  end
end
