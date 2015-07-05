class ObservationsController < ApplicationController
  # skip_authorization_check
  load_and_authorize_resource
  before_action :set_observation, only: [:show, :edit, :update, :destroy]

  # GET /observations


  def index
    @observations = Observation.all
    respond_to do |format|
      format.html
      format.csv do
        headers['Content-Disposition'] = "attachment; filename=\"user-list\""
        headers['Content-Type'] ||= 'text/csv'
      end
    end
  end

  # GET /observations/1
  def show
  end

  # GET /observations/new
  def new
    @observation = Observation.new
  end

  # GET /observations/1/edit
  def edit
  end

  # POST /observations
  def create
    @observation = Observation.new(observation_params)
    @observation.user_id = current_user.id

    if @observation.save
      redirect_to @observation, notice: 'Observation was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /observations/1
  def update
    if @observation.update(observation_params)
      redirect_to @observation, notice: 'Observation was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /observations/1
  def destroy
    @observation.destroy
    redirect_to observations_url, notice: 'Observation was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_observation
      @observation = Observation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def observation_params
      params.require(:observation).permit(:reaction_name, :donor, :acceptor, :reaction, :lab, :environment_type, :location_name, :rate, :gibbs_energy, :reference, :paper, :user_id, :lat, :lng, :add_info, :gibbs_units, :rate_units)
    end
end
