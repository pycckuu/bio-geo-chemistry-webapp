require "rails_helper"

RSpec.describe GibbsRatesObservationsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/gibbs_rates_observations").to route_to("gibbs_rates_observations#index")
    end

    it "routes to #new" do
      expect(:get => "/gibbs_rates_observations/new").to route_to("gibbs_rates_observations#new")
    end

    it "routes to #show" do
      expect(:get => "/gibbs_rates_observations/1").to route_to("gibbs_rates_observations#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/gibbs_rates_observations/1/edit").to route_to("gibbs_rates_observations#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/gibbs_rates_observations").to route_to("gibbs_rates_observations#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/gibbs_rates_observations/1").to route_to("gibbs_rates_observations#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/gibbs_rates_observations/1").to route_to("gibbs_rates_observations#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/gibbs_rates_observations/1").to route_to("gibbs_rates_observations#destroy", :id => "1")
    end

  end
end
