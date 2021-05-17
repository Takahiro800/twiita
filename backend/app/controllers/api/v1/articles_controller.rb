class Api::V1::ArticlesController < ApplicationController
  def index
    render json: Article.all
  end

  def create

  end

  def destroy
    Article.destroy(params[:id])
  end

end
