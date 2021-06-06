class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery before_action :skip_session
  # skip_before_action :verify_authenticity_token, if: :devise_controller?

  # protected
  #   def skip_session
  #     request.session_options[:skip] = true
  #   end

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
