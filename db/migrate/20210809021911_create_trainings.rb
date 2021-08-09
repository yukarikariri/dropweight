class CreateTrainings < ActiveRecord::Migration[6.0]
  def change
    create_table :trainings do |t|
      t.string         :training,      null: false
      t.datetime       :start_time,    null: false
      t.references     :user,          null: false, foreign_key: true
      t.timestamps
    end
  end
end
