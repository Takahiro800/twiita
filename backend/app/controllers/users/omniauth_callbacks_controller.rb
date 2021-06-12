module Users
  class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
    protected

    # To avoid ActiveModel::ForbiddenAttributesError
    def assign_provider_attrs(user, auth_hash)
      case auth_hash["provider"]
      when "google_oauth2"
        user.assign_attributes({
          name: auth_hash["info"]["name"],
          image: auth_hash["info"]["image"],
          email: auth_hash["info"]["email"]
        })
      else
        super
      end
    end
  end
end