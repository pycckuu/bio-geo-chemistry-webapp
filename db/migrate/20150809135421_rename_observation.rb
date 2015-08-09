class RenameObservation < ActiveRecord::Migration
  def self.up
    rename_table :observation, :gibbs_rates_observation
  end

 def self.down
    rename_table :gibbs_rates_observation, :observation
 end
end

