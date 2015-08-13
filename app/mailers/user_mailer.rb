class UserMailer < ActionMailer::Base
  default from: Rails.application.config.settings.mail.from
  layout 'emails/email'

  def welcome_email(user)
    return false unless load_user(user).present?
    mail to: @user.email, subject: I18n.t('emails.welcome.subject')
  end

  def test_email
    @recipients = "is.markelov@gmail.com"
    @from = "admin@bio-geo-chemistry.org"
    @subject = "test from the Rails Console"
    @body = "This is a test email"
  end

  protected

  def load_user(user)
    @user = user.is_a?(User) ? user : User.find(user)
  end
end
