class Api::V1::SessionsController < ApplicationController

	def create
		user = User.find_by(uid: params[:sesstion][:twitter_id])
		if user && user.authenticate(params[:session][:password])
			log_in user
			redirect_to root_url
		else
			render 'new'
	end

	def destroy
		log_out if logged_in?
		render json: "ログアウト完了しました"
	end

	private
	 # 渡されたユーザーでログインする

end
