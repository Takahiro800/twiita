class TwitterSerializer < ActiveModel::Serializer
  # attributes :id

  attr_accessor :name

  def initialize(id)
    @name = id
  end
end
