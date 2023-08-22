class JsonWebToken
  def self.encode(payload)
    expiration = 10.minutes.from_now.to_i
    JWT.encode(payload.merge(exp: expiration), ENV["JWT_SECRET_KEY"], "HS256")
  end

  def self.decode(token)
    JWT.decode(token, ENV["JWT_SECRET_KEY"], true, algorithm: "HS256").first
  end
end