class Api::V1::FavoritesController < ApplicationController
	# before_action :authenticate_user!, only: [:index]
  # before_action :set_twitter_client, only: [:index]

  def index
		set_twitter_client
    tweets = @twitter_client.favorites({count: 200, tweet_mode: "extended"})
    pull_tweets =  Article.pull_tweets(tweets)
    render json: pull_tweets
  end

  def create
    # お気に入りするためにtwitter apiを叩く
  end

	private

	def set_twitter_client(token, secret)
    twitter_client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['TWITTER_API_KEY']
      config.consumer_secret = ENV['TWITTER_API_SECRET_KEY']
      # config.access_token = ENV['TWITTER_ACCESS_TOKEN']
      # config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
      config.access_token = user.twitter_token
      config.access_token_secret = user.twitter_secret
    end
    @twitter_client = twitter_client
  end

end
