Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['TWITTER_API_KEY'], ENV['TWITTER_SECRET_API_KEY']
#   , callback_url: "http://127.0.0.1:3000/api/v1/auth/twitter/callback"
end