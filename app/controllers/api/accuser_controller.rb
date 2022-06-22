class Api::AccuserController < ApplicationController
  before_action :authenticate_user
  def index
    render json: User.unliked_user(current_user.liked_user)
  end

  def update
    current_user.liked_user.push(params[:id])
    # save to db
    current_user.save
    render json: current_user
  end
  def my_user
    render json: User.liked_user(current_user.liked_user)
  end
end
