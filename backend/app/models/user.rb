# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: [:twitter, :pocket]
  include DeviseTokenAuth::Concerns::User

	devise :omniauthable, omniauth_providers: [:twitter]


	def self.find_or_create_from_auth(auth)
		user = find_by(provider: auth.provider, uid: auth.uid)

		unless user
		# 	user = new(
		# 		provider: atuh.provider
		# 		uid: atuh.uid
		# 		email: User.dummy_email
		# 	)

		# 	if auth.provider == 'twitter'
		# 		user.twitter_token = auth.credentials.token
		# 		user.twitter_secret = auth.credentials.secret
		# 	end
		# 	user.save!
		end
		return user
	end

	private

	def self.dummy_email(auth)
		"#{auth.uid}-#{auth.provider}@example.com"
	end

end
