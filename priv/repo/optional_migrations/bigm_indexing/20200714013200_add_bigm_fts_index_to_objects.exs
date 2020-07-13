defmodule Pleroma.Repo.Migrations.AddBigmFtsIndexToObjects do
  use Ecto.Migration

  def up do
    execute("CREATE EXTENSION IF NOT EXISTS pg_bigm")
    create_if_not_exists index(:objects, ["(data->>'content') gin_bigm_ops"], using: :gin, name: :objects_fts_bigm)
    drop_if_exists index(:objects, ["(to_tsvector('english', data->>'content'))"], using: :gin, name: :objects_fts)
  end

  def down do
    create_if_not_exists index(:objects, ["(to_tsvector('english', data->>'content'))"], using: :gin, name: :objects_fts)
    drop_if_exists index(:objects, ["(data->>'content') gin_bigm_ops"], using: :gin, name: :objects_fts_bigm)
  end
end
