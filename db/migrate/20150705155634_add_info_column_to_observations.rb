class AddInfoColumnToObservations < ActiveRecord::Migration
  def change
    add_column :observations, :add_info, :text
  end
end
