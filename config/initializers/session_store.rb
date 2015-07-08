# Be sure to restart your server when you modify this file.

if Rails.env.production?
    Rails.application.config.session_store :active_record_store
else
    Rails.application.config.session_store :active_record_store
end