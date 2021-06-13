class Api::V1::AuthTestController < ApplicationController
	before_action :authenticate_user!, only: :index

	def index
		render json: current_user
	end
end
