class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  has_many :posts
  has_many :comments through :posts
  has_many :likes through :posts

  def generate_password_reset_token
    self.password_reset_token = SecureRandom.urlsafe.base64
    self.password_reset_token_expires_at = Time.now + 1.hour

    save(validate: false)
  end

  def password_reset_token_valid?
    password_reset_token_expires_at > Time.now
  end

  def generate_remember_me_token
    self.remember_me_token = SecureRandom.urlsafe.base64
    self.remember_me_token_expires_at = Time.now + 24.hours

    save(validate: false)
  end
end
