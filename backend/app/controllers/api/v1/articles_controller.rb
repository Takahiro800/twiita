class Api::V1::ArticlesController < ApplicationController
  before_action :set_twitter_client, only: [:create, :index]
	before_action :current_user, only:[:index, :create, :search]

  def index
    render json: current_user.Article.all
  end

  def create
    article = Article.new(article_params)
		article.user_id = current_user.id
		article.save
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
    @articles = current_user.articles.search(@search_params[:keyword])
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
