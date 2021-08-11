class TrainingsController < ApplicationController
  def new
    @training = Training.new
  end

  def create
    @training = Training.new(training_params)
    if @training.save
      redirect_to weight_path(current_user.id)
    else
      render :new
    end
  end

  private

  def training_params
    params.require(:training).permit(:training, :start_time).merge(user_id: current_user.id)
  end
end
