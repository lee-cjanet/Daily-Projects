class Post < ApplicationRecord
  validates :title, :subs, :author, presence: true

  has_many :post_subs, inverse_of: :post, dependent: :destroy
  has_many :subs, through: :post_subs, source: :sub
  has_many :comments
  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
