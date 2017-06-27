class Sub < ApplicationRecord
  validates :title, :description, :moderator, presence: true

  has_many :posts, through: :post_subs, source: :post
  has_many :post_subs, inverse_of: :sub, dependent: :destroy
  belongs_to :moderator,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
