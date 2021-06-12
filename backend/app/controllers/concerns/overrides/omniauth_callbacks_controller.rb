module Overrides

	class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController

		# def redirect_callbacks
		# super
		# end

		# def omniauth_success
		# super
		# end

		# def omniauth_failure
		# 	super
		# end

		def twitter
    		callback_from :twitter
		end

		private

	def callback_from(provider)
		provider = provider.to_s

		@user = User.find_for_oauth(request.env['omniauth.auth'])

		if @user.persisted?
		flash[:notice] = I18n.t('devise.omniauth_callbacks.success', kind: provider.capitalize)
		sign_in_and_redirect @user, event: :authentication
		else
		session["devise.#{provider}_data"] = request.env['omniauth.auth']
		redirect_to new_user_registration_url
		end
	end

		protected
		def assign_provider_attrs(user, auth_hash)
			case auth_hash['provider']
			when 'twitter'
				user.assign_attributes({
				nickname: auth_hash['info']['nickname'],
				name: auth_hash['info']['name'],
				image: auth_hash['info']['image'],
				email: auth_hash['info']['email']
				})
			else
				super
			end
		end
	end

end