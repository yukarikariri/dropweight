class WeightsController < ApplicationController
  def index
  end

  def show
    @motion = Motion.new
    @motions = Motion.where(user_id: current_user.id)

    ### 【体重推移グラフ】データ取得＆JavaScriptへ受け渡しのための加工
    # dates = Weight.date_range(current_user.id, Date.today.beginning_of_month, Date.today.end_of_month)
    dates_weights = Weight.user_weight(current_user.id, Date.today.beginning_of_month, Date.today.end_of_month)
    goal = User.find(current_user.id)

    @dates = []
    @weights = []
    @goalweight = []

    dates_weights.each do |date_weight|
     @dates << date_weight.start_time.strftime("%m/%d")
     @weights << date_weight.weight
     @goalweight << goal.target_weight
    end

    # 元々、日付と体重の取得を別処理に分けていたが、↑に一つの処理でのデータベースアクセスに纏めた
    # weights = Weight.user_weight(current_user.id, Date.today.beginning_of_month, Date.today.end_of_month)
    # @weights = []
    # weights.each do |weight|
    #   @weights << weight.weight
    # end

    ### 【摂取水分量グラフ】データ取得＆JavaScriptへ受け渡しのための加工
    date_waters = Water.user_water(current_user.id, Date.today.beginning_of_month, Date.today.end_of_month)

    @dates_water = []
    @waters = []
    @goalwater = []

    # date_waters.each do |date_water|
    #  @dates_water << date_water.start_time.strftime("%m/%d")
    #  @waters << date_water.water
    #  @goalwater << goal.target_water
    # end
    waterdates = date_waters.keys
    waterwaters = date_waters.values

    waterdates.each do |waterdate|
     @dates_water << waterdate.strftime("%m/%d")
     @goalwater << goal.target_water
    end

    waterwaters.each do |waterdate|
      @waters << waterdate.round(2)
    end

  end

  def new
    @weight = Weight.new
  end

  def create
    @weight = Weight.new(weight_params)
    if @weight.save
      redirect_to weight_path(current_user.id)
    else
      render :new
    end
  end

  private

  def weight_params
    params.require(:weight).permit(:weight, :start_time).merge(user_id: current_user.id)
  end
end
