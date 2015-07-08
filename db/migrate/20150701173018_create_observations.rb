class CreateObservations < ActiveRecord::Migration
  def change
    create_table :observations do |t|
      t.string :reaction_name
      t.string :donor
      t.string :acceptor
      t.string :reaction
      t.boolean :lab
      t.string :environment_type
      t.string :location_name
      t.float :rate
      t.float :gibbs_energy
      t.string :reference
      t.string :paper

      t.timestamps null: false
    end
  end
end
