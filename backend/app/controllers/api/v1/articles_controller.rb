class Api::V1::ArticlesController < ApplicationController
  before_action :set_twitter_client, only: [:create, :index]

  def index
    @articles = @twitter_client.favorites({count: 10, tweet_mode: "extend"})
    render json: @articles
  end

  def create
    tweets = @twitter_client.favorites({count: 10, tweet_mode: "extend"})
    Article.find_or_create_by(app: "twitter", twitter_id: tweet.id) do |article|
      article.origin_link = tweet.uri
      article.origin_context = tweet.full_text
      article.origin_user = tweet.user.name
    end
  end

  def destroy
    Article.destroy(params[:id])
  end

  private

  def set_twitter_client
    twitter_client = Twitter::REST::Client.new do |config|
      binding.pry
      config.consumer_key = ENV['TWITTER_API_KEY']
      config.consumer_secret = ENV['TWITTER_SECRET_API_KEY']
      config.access_token = ENV['TWITTER_ACCESS_TOKEN']
      config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
    end
    @twitter_client = twitter_client
  end

end
