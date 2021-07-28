class MotionsController < ApplicationController
  def new
    @motion = Motion.new
  end

  def create
    @motion = Motion.new(motion_params)
    if @motion.save
      redirect_to weight_path(current_user.id)
    else
      render :new
    end
  end

  private

  def motion_params
    params.require(:motion).permit(:motion, :start_time).merge(user_id: current_user.id)
  end
end
