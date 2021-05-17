class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :tiwtter_id
      t.string :origin_user
      t.string :origin_link
      t.string :origin_context

      t.timestamps
    end
  end
end
