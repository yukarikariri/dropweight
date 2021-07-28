class WeightsController < ApplicationController
  def index
  end

  def show
    @motion = Motion.new
    @motions = Motion.where(user_id: current_user.id)
  end
end
