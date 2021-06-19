# module Users
  class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
		# def omniauth_success
		# 	super
		# 	binding.pry
		# 	callback_form :twitter
		# end

		# private

		# def callback_form(provider)
		# 	provider = provider.to_s
		# end
		# skip_before_action :skip_session


		def redirect_callbacks
			super
		end

		def passthru
			binding.pry
			super
		end

		def twitter
			binding.pry
		end


		def omniauth_success
			super
			current_user.twitter_token = auth_hash["credentials"]["token"]
			current_user.twitter_secret = auth_hash["credentials"]["secret"]
			update_auth_header
		end

		def omniauth_failure
			binding.pry
			super
		end

		protected
			def get_resource_from_auth_hash
				super
					# @resource.credentials = auth_hash["credentials"]
				clean_resource
			end

			def render_data_or_redirect(message, data, user_data = {})
				if Rails.env.production?
					if ['inAppBrowser', 'newWindow'].include?(omniauth_window_type)
						render_data(message, user_data.merge(data))
					elsif auth_origin_url
						redirect_to DeviseTokenAuth::Url.generate(auth_origin_url, data.merge(blank: true))
					else
						fallback_render data[:error] || 'An error occurred'
					end
				else
					# @resource.credentials = auth_hash["credentials"]

					# わかりやすい様に開発時はjsonとして結果を返す
					render json: @resource, status: :ok
				end
			end

			def clean_resource
				@resource.name = strip_emoji(@resource.name)
				@resource.nickname = strip_emoji(@resource.nickname)
			end
			def strip_emoji(str)
				str.encode('SJIS', 'UTF-8', invalid: :replace, undef: :replace, replace: '').encode('UTF-8')
			end
		end
#   end
# end