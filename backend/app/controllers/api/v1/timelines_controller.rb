class Api::V1::TimelinesController < ApplicationController
  before_action :set_twitter_client, only: [:index]

  def index
    tweets = @twitter_client.home_timeline({count: 10, tweet_mode: "extended"})
    pull_tweets = Article.pull_tweets(tweets)
    render json: pull_tweets
  end
end
