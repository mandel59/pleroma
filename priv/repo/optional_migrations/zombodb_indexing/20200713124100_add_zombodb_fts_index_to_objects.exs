defmodule Pleroma.Repo.Migrations.AddZombodbFtsIndexToObjects do
  use Ecto.Migration

  def up do
    execute("CREATE EXTENSION IF NOT EXISTS zombodb")

    alter table(:objects) do
      add(:fts_content_zdb_cjk, :"zdb.cjk")
    end

    execute("CREATE INDEX IF NOT EXISTS objects_fts_zombodb ON objects USING zombodb ((objects.*)) WITH (url='http://localhost:9200/');")
    execute("CREATE FUNCTION objects_fts_update() RETURNS trigger AS $$
      begin
        new.fts_content_zdb_cjk := new.data->>'content';
        return new;
      end
      $$ LANGUAGE plpgsql")
    execute("CREATE TRIGGER fts_update BEFORE INSERT OR UPDATE ON objects
      FOR EACH ROW EXECUTE PROCEDURE objects_fts_update()")
    execute("UPDATE objects SET updated_at = NOW()")

    drop_if_exists index(:objects, ["(to_tsvector('english', data->>'content'))"], using: :gin, name: :objects_fts)
  end

  def down do
    create_if_not_exists index(:objects, ["(to_tsvector('english', data->>'content'))"], using: :gin, name: :objects_fts)

    execute "DROP TRIGGER IF EXISTS fts_update ON objects"
    execute "DROP FUNCTION IF EXISTS objects_fts_update()"
    execute "DROP INDEX IF EXISTS objects_fts_zombodb"

    alter table(:objects) do
      remove(:fts_content_zdb_cjk, :"zdb.cjk")
    end
  end
end
