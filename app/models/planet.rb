class Planet
  include Mongoid::Document

  field :name, type: String
  field :image, type: String

end
