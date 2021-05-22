class Api::V1::ArticlesController < ApplicationController
  before_action :set_twitter_client, only: [:create, :index]

  def index
    tweets = @twitter_client.favorites({count: 10, tweet_mode: "extended"})
    pull_tweets =  Article.pull_tweets(tweets)
    render json: pull_tweets
  end

  def create
    tweets = @twitter_client.favorites({count: 10, tweet_mode: "extended"})
    Article.fetch_tweets(tweets)
  end

  def destroy
    Article.destroy(params[:id])
  end

  private

  def set_twitter_client
    twitter_client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['TWITTER_API_KEY']
      config.consumer_secret = ENV['TWITTER_SECRET_API_KEY']
      config.access_token = ENV['TWITTER_ACCESS_TOKEN']
      config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
    end
    @twitter_client = twitter_client
  end

end
