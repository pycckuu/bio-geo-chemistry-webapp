class AddColumnsToObservations < ActiveRecord::Migration
  def change
    add_column :observations, :lat, :decimal
    add_column :observations, :lng, :decimal
  end
end
