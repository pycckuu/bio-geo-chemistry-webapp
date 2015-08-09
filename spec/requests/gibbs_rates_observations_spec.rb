require 'rails_helper'

RSpec.describe "GibbsRatesObservations", type: :request do
  
  let(:valid_session) { {} }

  describe "GET /gibbs_rates_observations" do
    pending "works! (now write some real specs)" do
      get gibbs_rates_observations_path, valid_session
      expect(response).to have_http_status(200)
    end
  end
end
