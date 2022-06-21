class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :location
      t.string :registry
      t.string :avatar

      t.timestamps
    end
  end
end
