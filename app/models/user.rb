class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  def generate_password_reset_token
    self.password_reset_token = SecureRandom.urlsafe.base64
    self.password_reset_token_expires_at = Time.now + 1.hour
  end
end
