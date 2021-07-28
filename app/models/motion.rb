class Motion < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :motion
    validates :start_time
  end
end
