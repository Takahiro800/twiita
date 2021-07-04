class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
	include ActionController::Cookies
  # protect_from_forgery before_action :skip_session
  # skip_before_action :verify_authenticity_token, if: :devise_controller?

  # protected
  #   def skip_session
  #     request.session_options[:skip] = true
  #   end

  private

  def set_twitter_client
		current_user
		if logged_in?
			twitter_client = Twitter::REST::Client.new do |config|
				config.consumer_key = ENV['TWITTER_API_KEY']
				config.consumer_secret = ENV['TWITTER_SECRET_API_KEY']
				# config.access_token = ENV['TWITTER_ACCESS_TOKEN']
				# config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
				config.access_token = current_user.twitter_token
				config.access_token_secret = current_user.twitter_secret
			end
			@twitter_client = twitter_client
		end
  end

	def logged_in_user
		unless logged_in?
			redirect_to api_v1_articles_url
		end
	end

	def log_in(user)
    cookies[:twitter_uid] = user.uid
    cookies[:user_id] = user.id
  end

	def current_user
    if cookies[:user_id]
			#@current_user = @current_user || User.find_by(id: session[:user_id])と同じ意味
      current_user ||= User.find_by(id: cookies[:user_id], uid: cookies[:twitter_uid])
    end
  end

	def logged_in?
    !current_user.nil?
  end

	def log_out
    cookies.delete(:user_id)
    cookies.delete(:twitter_uid)
    current_user = nil
  end

end
