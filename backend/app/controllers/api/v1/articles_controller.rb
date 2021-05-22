class Api::V1::ArticlesController < ApplicationController
  before_action :set_twitter_client, only: [:create, :index]

  def index
    render json: Article.all
  end

  def create
  end

  def destroy
    Article.destroy(params[:id])
  end

end
