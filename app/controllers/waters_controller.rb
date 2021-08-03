class WatersController < ApplicationController
  def new
    @water = Water.new
  end

  def create
    @water = Water.new(water_params)
    if @water.save
      redirect_to weight_path(current_user.id)
    else
      render :new
    end
  end

  private

  def water_params
    params.require(:water).permit(:water, :start_time).merge(user_id: current_user.id)
  end
end
