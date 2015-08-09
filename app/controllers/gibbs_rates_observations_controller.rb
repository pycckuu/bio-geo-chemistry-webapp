class GibbsRatesObservationsController < ApplicationController
  # skip_authorization_check
  load_and_authorize_resource
  before_action :set_gibbs_rates_observation, only: [:show, :edit, :update, :destroy]

  # GET /gibbs_rates_observations


  def index
    @gibbs_rates_observations = GibbsRatesObservation.all
    respond_to do |format|
      format.html
      format.csv do
        headers['Content-Disposition'] = "attachment; filename=\"gibbs_rates_observations-db.csv\""
        headers['Content-Type'] ||= 'text/csv'
      end
    end
  end

  # GET /gibbs_rates_observations/1
  def show
  end

  # GET /gibbs_rates_observations/new
  def new
    @gibbs_rates_observation = GibbsRatesObservation.new
  end

  # GET /gibbs_rates_observations/1/edit
  def edit
  end

  # POST /gibbs_rates_observations
  def create
    @gibbs_rates_observation = GibbsRatesObservation.new(gibbs_rates_observation_params)
    @gibbs_rates_observation.user_id = current_user.id

    if @gibbs_rates_observation.save
      redirect_to @gibbs_rates_observation, notice: 'GibbsRatesObservation was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /gibbs_rates_observations/1
  def update
    if @gibbs_rates_observation.update(gibbs_rates_observation_params)
      redirect_to @gibbs_rates_observation, notice: 'GibbsRatesObservation was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /gibbs_rates_observations/1
  def destroy
    @gibbs_rates_observation.destroy
    redirect_to gibbs_rates_observations_url, notice: 'GibbsRatesObservation was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gibbs_rates_observation
      @gibbs_rates_observation = GibbsRatesObservation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gibbs_rates_observation_params
      params.require(:gibbs_rates_observation).permit(:reaction_name, :donor, :acceptor, :reaction, :lab, :environment_type, :location_name, :rate, :gibbs_energy, :reference, :paper, :user_id, :lat, :lng, :add_info, :gibbs_units, :rate_units)
    end
end
