require 'oauth'

class Api::V1::AuthTestController < ApplicationController
	include ActionController::Cookies
	before_action :authenticate_user!, only: :index

	def index
		render json: current_user
	end

	def get_twitter_oauth_url
		consumer = OAuth::Consumer.new(
			ENV['TWITTER_API_KEY'],
			ENV['TWITTER_SECRET_API_KEY'],
			# Oauth::TWITTER_CONSUMER_SECRET,
			{ :site => "https://api.twitter.com" }
		)

		request_token = consumer.get_request_token(
			# :oauth_callback => "http://localhost:3000/api/v1/auth/twitter/callback"
			:oauth_callback => "http://localhost:3000/api/v1/oauth_twitter"
		)


		cookies[:request_token] = request_token.token
		cookies[:request_token_secret] = request_token.secret

		rtn = {}
		rtn["status"] = true
		rtn["oauth_url"] = request_token.authorize_url

		render json: rtn
	end

	def twitter
		binding.pry
		consumer = OAuth::Consumer.new(
			ENV['TWITTER_API_KEY'],
			ENV['TWITTER_SECRET_API_KEY'],
      { :site => "https://api.twitter.com" }
    )


    request_token = OAuth::RequestToken.new(
      consumer,
      cookies[:request_token],
      cookies[:request_token_secret]
    )

    access_token = request_token.get_access_token(
      {},
      :oauth_token => params[:oauth_token],
      :oauth_verifier => params[:oauth_verifier]
    )

    response = consumer.request(
      :get,
      '/1.1/account/verify_credentials.json',
      access_token, { :scheme => :query_string }
    )


    rtn = {}

    case response
    when Net::HTTPSuccess
      user_info = JSON.parse(response.body)

      if user_info["screen_name"]
        cookies[:oauth_token] = params[:oauth_token]
        cookies[:twitter_uid] = user_info["id"]
        cookies[:screen_name] = user_info["screen_name"]
      else
        #"Authentication failed"
      end
    else
        #"Failed to get user info via OAuth"
    end
		binding.pry
	end
end
