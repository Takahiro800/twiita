class Api::V1::SessionsController < ApplicationController

	def create
		user = User.find_or_create_from_auth(auth)

	end

end
