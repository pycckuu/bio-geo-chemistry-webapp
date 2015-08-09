class RenameObservationToGibbsRatesObservation < ActiveRecord::Migration
  def change
    rename_table :observations, :gibbs_rates_observations
  end
end
