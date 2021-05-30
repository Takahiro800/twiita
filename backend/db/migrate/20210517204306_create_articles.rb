class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :twitter_id, unique: true
      t.string :origin_user
      t.text :origin_link
      t.text :origin_context

      t.timestamps
    end
  end
end
