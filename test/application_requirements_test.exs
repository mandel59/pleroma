# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.ApplicationRequirementsTest do
  use Pleroma.DataCase
  import ExUnit.CaptureLog
  import Mock

  alias Pleroma.Repo

  describe "check_rum!" do
    setup_with_mocks([
      {Pleroma.ApplicationRequirements, [:passthrough],
       [check_migrations_applied!: fn _ -> :ok end]}
    ]) do
      :ok
    end

    setup do: clear_config([:database, :rum_enabled])

    test "raises if rum is enabled and detects unapplied rum migrations" do
      Pleroma.Config.put([:database, :rum_enabled], true)

      with_mocks([{Repo, [:passthrough], [exists?: fn _, _ -> false end]}]) do
        assert_raise Pleroma.ApplicationRequirements.VerifyError,
                     "Unapplied RUM Migrations detected",
                     fn ->
                       capture_log(&Pleroma.ApplicationRequirements.verify!/0)
                     end
      end
    end

    test "raises if rum is disabled and detects rum migrations" do
      Pleroma.Config.put([:database, :rum_enabled], false)

      with_mocks([{Repo, [:passthrough], [exists?: fn _, _ -> true end]}]) do
        assert_raise Pleroma.ApplicationRequirements.VerifyError,
                     "RUM Migrations detected",
                     fn ->
                       capture_log(&Pleroma.ApplicationRequirements.verify!/0)
                     end
      end
    end

    test "doesn't do anything if rum enabled and applied migrations" do
      Pleroma.Config.put([:database, :rum_enabled], true)

      with_mocks([{Repo, [:passthrough], [exists?: fn _, _ -> true end]}]) do
        assert Pleroma.ApplicationRequirements.verify!() == :ok
      end
    end

    test "doesn't do anything if rum disabled" do
      Pleroma.Config.put([:database, :rum_enabled], false)

      with_mocks([{Repo, [:passthrough], [exists?: fn _, _ -> false end]}]) do
        assert Pleroma.ApplicationRequirements.verify!() == :ok
      end
    end
  end

  describe "check_migrations_applied!" do
    setup_with_mocks([
      {Ecto.Migrator, [],
       [
         with_repo: fn repo, fun -> passthrough([repo, fun]) end,
         migrations: fn Repo ->
           [
             {:up, 20_191_128_153_944, "fix_missing_following_count"},
             {:up, 20_191_203_043_610, "create_report_notes"},
             {:down, 20_191_220_174_645, "add_scopes_to_pleroma_feo_auth_records"}
           ]
         end
       ]}
    ]) do
      :ok
    end

    setup do: clear_config([:i_am_aware_this_may_cause_data_loss, :disable_migration_check])

    test "raises if it detects unapplied migrations" do
      assert_raise Pleroma.ApplicationRequirements.VerifyError,
                   "Unapplied Migrations detected",
                   fn ->
                     capture_log(&Pleroma.ApplicationRequirements.verify!/0)
                   end
    end

    test "doesn't do anything if disabled" do
      Pleroma.Config.put([:i_am_aware_this_may_cause_data_loss, :disable_migration_check], true)

      assert :ok == Pleroma.ApplicationRequirements.verify!()
    end
  end
end
