class AddUnitsColumnToObservations < ActiveRecord::Migration
  def change
    add_column :observations, :gibbs_units, :string
    add_column :observations, :rate_units, :string
  end
end
