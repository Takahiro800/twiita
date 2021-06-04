class Api::V1::ArticlesController < ApplicationController
  before_action :set_twitter_client, only: [:create, :index]

  def index
    render json: Article.all
  end

  def create
    article = Article.create(article_params)
    if article.valid?
      render json: {status: 'success', message: '保存しました'}
    else
      render json: {status: 'info', message: "保存済みです"}
    end
  end

  def destroy
    Article.destroy(params[:id])
  end

  def search
    @search_params = article_search_params
    @articles = Article.search(@search_params[:keyword])
    render json: @articles
  end

  private

  def article_params
    params.require(:article).permit(:twitter_id, :origin_link, :origin_context,:icon_url)
  end

  def article_search_params
    params.permit(:keyword)
  end

end
