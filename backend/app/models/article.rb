class Article < ApplicationRecord
  valiates :origin_contest, :origin_link, presence: true
end
