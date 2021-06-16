class Api::V1::FavoritesController < ApplicationController
	# before_action :authenticate_user!, only: [:index]
  before_action :set_twitter_client, only: [:index]

  def index
    tweets = @twitter_client.favorites({count: 200, tweet_mode: "extended"})
    pull_tweets =  Article.pull_tweets(tweets)
    render json: pull_tweets
  end

  def create
    # お気に入りするためにtwitter apiを叩く
  end



end
