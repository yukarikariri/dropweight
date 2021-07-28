class CreateMotions < ActiveRecord::Migration[6.0]
  def change
    create_table :motions do |t|
      t.string         :motion,        null: false
      t.datetime       :start_time,    null: false
      t.references     :user,          null: false, foreign_key: true
      t.timestamps
    end
  end
end
