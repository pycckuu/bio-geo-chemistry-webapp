require 'rails_helper'

RSpec.describe "gibbs_rates_observations/edit", type: :view do
  before(:each) do
    @gibbs_rates_observation = assign(:gibbs_rates_observation, GibbsRatesObservation.create!(
      :reaction_name => "MyString",
      :donor => "MyString",
      :acceptor => "MyString",
      :reaction => "MyString",
      :lab => false,
      :environment_type => "MyString",
      :location_name => "MyString",
      :rate => 1.5,
      :gibbs_energy => 1.5,
      :reference => "MyString",
      :paper => "MyString"
    ))
  end

  pending "renders the edit gibbs_rates_observation form" do
    render

    assert_select "form[action=?][method=?]", gibbs_rates_observation_path(@gibbs_rates_observation), "post" do

      assert_select "input#gibbs_rates_observation_reaction_name[name=?]", "gibbs_rates_observation[reaction_name]"

      assert_select "input#gibbs_rates_observation_donor[name=?]", "gibbs_rates_observation[donor]"

      assert_select "input#gibbs_rates_observation_acceptor[name=?]", "gibbs_rates_observation[acceptor]"

      assert_select "input#gibbs_rates_observation_reaction[name=?]", "gibbs_rates_observation[reaction]"

      assert_select "input#gibbs_rates_observation_lab[name=?]", "gibbs_rates_observation[lab]"

      assert_select "input#gibbs_rates_observation_environment_type[name=?]", "gibbs_rates_observation[environment_type]"

      assert_select "input#gibbs_rates_observation_location_name[name=?]", "gibbs_rates_observation[location_name]"

      assert_select "input#gibbs_rates_observation_rate[name=?]", "gibbs_rates_observation[rate]"

      assert_select "input#gibbs_rates_observation_gibbs_energy[name=?]", "gibbs_rates_observation[gibbs_energy]"

      assert_select "input#gibbs_rates_observation_reference[name=?]", "gibbs_rates_observation[reference]"

      assert_select "input#gibbs_rates_observation_paper[name=?]", "gibbs_rates_observation[paper]"
    end
  end
end
