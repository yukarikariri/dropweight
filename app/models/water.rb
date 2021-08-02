class Water < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :water
    validates :start_time
  end

end
