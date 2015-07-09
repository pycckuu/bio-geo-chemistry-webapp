require 'rails_helper'

RSpec.describe "observations/show", type: :view do
  before(:each) do
    @observation = assign(:observation, Observation.create!(
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
    ))
  end

  pending "renders attributes in <p>" do
    render 
    expect(rendered).to match(/Reaction Name/)
    expect(rendered).to match(/Donor/)
    expect(rendered).to match(/Acceptor/)
    expect(rendered).to match(/Reaction/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/Environment Type/)
    expect(rendered).to match(/Location Name/)
    expect(rendered).to match(/1.5/)
    expect(rendered).to match(/1.5/)
    expect(rendered).to match(/Reference/)
    expect(rendered).to match(/Paper/)
  end
end
