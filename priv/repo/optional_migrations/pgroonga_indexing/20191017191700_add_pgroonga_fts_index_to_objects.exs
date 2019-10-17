defmodule Pleroma.Repo.Migrations.AddFtsIndexToObjectsTwo do
  use Ecto.Migration

  def up do
    execute "CREATE EXTENSION IF NOT EXISTS pgroonga"

    execute "CREATE INDEX IF NOT EXISTS objects_fts_pgroonga ON objects USING pgroonga (data)"
    drop_if_exists index(:objects, ["(to_tsvector('english', data->>'content'))"], using: :gin, name: :objects_fts)
  end

  def down do
    create_if_not_exists index(:objects, ["(to_tsvector('english', data->>'content'))"], using: :gin, name: :objects_fts)
    execute "DROP INDEX IF EXISTS objects_fts_pgroonga"
  end
end
