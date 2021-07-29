class WeightsController < ApplicationController
  def index
  end

  def show
    @motion = Motion.new
    @motions = Motion.where(user_id: current_user.id)

    #基準線を出すには①Userテーブルからtarget_weightを抽出②グラフ表示月の開始日・終了日に①をセットする
  end
end
