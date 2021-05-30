class Article < ApplicationRecord
  validates :origin_context, :origin_link, presence: true
  validates :twitter_id, uniqueness: true

  def self.pull_tweets(tweets)
    pull_tweets = []

    tweets.reverse_each do |tweet|
      # もし存在したら、そのオブジェクトは返さない
      Article.find_or_initialize_by(twitter_id: tweet.id) do |article|
        article.twitter_id = tweet.id
        article.origin_link = tweet.uri
        article.origin_context = tweet.full_text
        article.origin_user = tweet.user.name
        pull_tweets.push(article)
      end
    end
    return pull_tweets
  end

  def self.pull_timelines(tweets, count)
    pull_tweets = []

    tweets.each do |tweet|
      if tweet.favorite_count >= count
        article = Article.new
        article.twitter_id = tweet.id
        article.origin_link = tweet.uri
        article.origin_context = tweet.full_text
        article.origin_user = tweet.user.name
        pull_tweets.push(article)
        puts tweet.favorite_count
      end
    end
    return pull_tweets
  end

  def self.fetch_tweets(tweets)
    tweets.reverse_each do |tweet|
      Article.find_or_create_by(twitter_id: tweet.id) do |article|
        article.origin_link = tweet.uri
        article.origin_context = tweet.full_text
        article.origin_user = tweet.user.name
      end
    end
  end

end
