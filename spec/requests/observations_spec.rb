require 'rails_helper'

RSpec.describe "Observations", type: :request do
  
  let(:valid_session) { {} }

  describe "GET /observations" do
    pending "works! (now write some real specs)" do
      get observations_path, valid_session
      expect(response).to have_http_status(200)
    end
  end
end
