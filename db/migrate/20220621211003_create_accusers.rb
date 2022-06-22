class CreateAccusers < ActiveRecord::Migration[7.0]
  def change
    create_table :accusers do |t|
      t.string :name
      t.string :gender
      t.string :avatar

      t.timestamps
    end
  end
end
