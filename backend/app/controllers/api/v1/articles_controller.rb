class Api::V1::ArticlesController < ApplicationController
  before_action :set_twitter_client, only: [:create, :index]

  def index
    render json: Article.all
  end

  def create
    article = Article.create(article_params)
    # これ不要な可能性ある
    render json: article
  end

  def destroy
    Article.destroy(params[:id])
  end

  private

    def article_params
      params.require(:article).permit(:origin_link, :origin_context, :origin_user)
    end

end
