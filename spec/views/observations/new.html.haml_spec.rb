require 'rails_helper'

RSpec.describe "observations/new", type: :view do
  before(:each) do
    assign(:observation, Observation.new(
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

  pending "renders new observation form" do
    render

    assert_select "form[action=?][method=?]", observations_path, "post" do

      assert_select "input#observation_reaction_name[name=?]", "observation[reaction_name]"

      assert_select "input#observation_donor[name=?]", "observation[donor]"

      assert_select "input#observation_acceptor[name=?]", "observation[acceptor]"

      assert_select "input#observation_reaction[name=?]", "observation[reaction]"

      assert_select "input#observation_lab[name=?]", "observation[lab]"

      assert_select "input#observation_environment_type[name=?]", "observation[environment_type]"

      assert_select "input#observation_location_name[name=?]", "observation[location_name]"

      assert_select "input#observation_rate[name=?]", "observation[rate]"

      assert_select "input#observation_gibbs_energy[name=?]", "observation[gibbs_energy]"

      assert_select "input#observation_reference[name=?]", "observation[reference]"

      assert_select "input#observation_paper[name=?]", "observation[paper]"
    end
  end
end
