require 'rails_helper'

RSpec.describe "gibbs_rates_observations/index", type: :view do
  before(:each) do
    assign(:gibbs_rates_observations, [
      GibbsRatesObservation.create!(
        :reaction_name => "Reaction Name",
        :donor => "Donor",
        :acceptor => "Acceptor",
        :reaction => "Reaction",
        :lab => false,
        :environment_type => "Environment Type",
        :location_name => "Location Name",
        :rate => 1.5,
        :gibbs_energy => 1.5,
        :reference => "Reference",
        :paper => "Paper"
      ),
      GibbsRatesObservation.create!(
        :reaction_name => "Reaction Name",
        :donor => "Donor",
        :acceptor => "Acceptor",
        :reaction => "Reaction",
        :lab => false,
        :environment_type => "Environment Type",
        :location_name => "Location Name",
        :rate => 1.5,
        :gibbs_energy => 1.5,
        :reference => "Reference",
        :paper => "Paper"
      )
    ])
  end

  pending  "renders a list of gibbs_rates_observations" do
    render
    assert_select "tr>td", :text => "Reaction Name".to_s, :count => 2
    assert_select "tr>td", :text => "Donor".to_s, :count => 2
    assert_select "tr>td", :text => "Acceptor".to_s, :count => 2
    assert_select "tr>td", :text => "Reaction".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => "Environment Type".to_s, :count => 2
    assert_select "tr>td", :text => "Location Name".to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => "Reference".to_s, :count => 2
    assert_select "tr>td", :text => "Paper".to_s, :count => 2
  end
end
