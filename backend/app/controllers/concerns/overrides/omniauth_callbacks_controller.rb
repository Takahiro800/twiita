module Overrides

	class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController

		def omniauth_success
			super
			update_auth_header
		end

		def twitter
			callback_form :twitter
		end

		private

		def callback_form(provider)
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


	end

end