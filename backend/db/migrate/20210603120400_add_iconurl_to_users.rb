class AddIconurlToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :icon_url, :string
  end
end
