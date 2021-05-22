class Article < ApplicationRecord
  validates :origin_context, :origin_link, presence: true

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
