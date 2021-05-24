class Api::V1::TimelinesController < ApplicationController
  before_action :set_twitter_client, only: [:index]

  def index
    tweets = @twitter_client.home_timeline({count: 200, tweet_mode: "extended"})
    # ここで「お気に入りが５以上の記事のみを表示するように」制限かけてる
    pull_tweets = Article.pull_timelines(tweets, 5)
    render json: pull_tweets
  end
end
