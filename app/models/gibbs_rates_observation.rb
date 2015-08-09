class GibbsRatesObservation < ActiveRecord::Base
  belongs_to  :user

  def owner
    User.find_by_id(self.user_id)
  end
end
