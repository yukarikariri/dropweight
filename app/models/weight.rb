class Weight < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :weight
    validates :start_time
  end

  # scope :date_range, -> (user_id, start_date, end_date) do
    ## select(:weight, :start_time).where(user_id: user_id, start_time: start_date..end_date).order("start_time ASC")
    ## select(:weight).where(user_id: user_id, start_time: start_date..end_date).order("start_time ASC")
    # dates = Weight.select('start_time').where(user_id: user_id, start_time: start_date..end_date).order("start_time ASC")
    ## dates.map{|date| [date.attributes]}
  # end

  scope :user_weight, ->(user_id, start_date, end_date) do
    weights = Weight.select('weight', 'start_time').where(user_id: user_id, start_time: start_date..end_date).order("start_time ASC") 
  end
end
