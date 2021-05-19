class Article < ApplicationRecord
  validates :origin_context, :origin_link, presence: true
end
