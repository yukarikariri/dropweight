class WeightsController < ApplicationController
  def index
  end

  def show
    @motion = Motion.new
    @motions = Motion.where(user_id: current_user.id)

    ### 体重推移グラフ用のデータ取得＆JavaScriptへ受け渡しのための加工
    # dates = Weight.date_range(current_user.id, Date.today.beginning_of_month, Date.today.end_of_month)
    dates_weights = Weight.user_weight(current_user.id, Date.today.beginning_of_month, Date.today.end_of_month)

    @dates = []
    @weights = []
    @goalweight = [60, 60, 60, 60, 60, 60, 60, 60]

    dates_weights.each do |date_weight|
     @dates << date_weight.start_time.strftime("%m/%d")
     @weights << date_weight.weight
    end

    # 元々、日付と体重の取得を別処理に分けていたが、↑に一つの処理でのデータベースアクセスに纏めた
    # weights = Weight.user_weight(current_user.id, Date.today.beginning_of_month, Date.today.end_of_month)
    # @weights = []
    # weights.each do |weight|
    #   @weights << weight.weight
    # end



      #基準線を出すには①Userテーブルからtarget_weightを抽出②グラフ表示月の開始日・終了日に①をセットする
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
