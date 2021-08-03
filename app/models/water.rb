class Water < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :water
    validates :start_time
  end

  scope :user_water, ->(user_id, start_date, end_date) do
    water = Water.select('water', 'start_time').where(user_id: user_id, start_time: start_date..end_date).group(:start_time).sum(:water) 
  end
end
