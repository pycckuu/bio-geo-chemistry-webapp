$twitter = Twitter::REST::Client.new do |config|
  config.consumer_key       = ENV['BIOGEOCHEM_TWITTER_CONSUMER_KEY']
  config.consumer_secret    = ENV['BIOGEOCHEM_TWITTER_CONSUMER_SECRET']
  config.oauth_token        = ENV['BIOGEOCHEM_TWITTER_OAUTH_TOKEN']
  config.oauth_token_secret = ENV['BIOGEOCHEM_TWITTER_OAUTH_TOKEN_SECRET']
end