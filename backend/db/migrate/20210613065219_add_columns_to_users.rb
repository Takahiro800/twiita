class AddColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
		add_column :users, :twitter_token, :string
		add_column :users, :twitter_secret, :string
  end
end
