defmodule Mix.Tasks.Pleroma.UserTest do
  alias Pleroma.User
  use Pleroma.DataCase

  import Pleroma.Factory
  import ExUnit.CaptureIO

  setup_all do
    Mix.shell(Mix.Shell.Process)

    on_exit(fn ->
      Mix.shell(Mix.Shell.IO)
    end)

    :ok
  end

  describe "running new" do
    test "user is created" do
      # just get random data
      unsaved = build(:user)

      # prepare to answer yes
      send(self(), {:mix_shell_input, :yes?, true})

      Mix.Tasks.Pleroma.User.run([
        "new",
        unsaved.nickname,
        unsaved.email,
        "--name",
        unsaved.name,
        "--bio",
        unsaved.bio,
        "--password",
        "test",
        "--moderator",
        "--admin"
      ])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "user will be created"

      assert_received {:mix_shell, :yes?, [message]}
      assert message =~ "Continue"

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "created"

      user = User.get_by_nickname(unsaved.nickname)
      assert user.name == unsaved.name
      assert user.email == unsaved.email
      assert user.bio == unsaved.bio
      assert user.info.is_moderator
      assert user.info.is_admin
    end

    test "user is not created" do
      unsaved = build(:user)

      # prepare to answer no
      send(self(), {:mix_shell_input, :yes?, false})

      Mix.Tasks.Pleroma.User.run(["new", unsaved.nickname, unsaved.email])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "user will be created"

      assert_received {:mix_shell, :yes?, [message]}
      assert message =~ "Continue"

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "will not be created"

      refute User.get_by_nickname(unsaved.nickname)
    end
  end

  describe "running rm" do
    test "user is deleted" do
      user = insert(:user)

      Mix.Tasks.Pleroma.User.run(["rm", user.nickname])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ " deleted"

      user = User.get_by_nickname(user.nickname)
      assert user.info.deactivated
    end

    test "no user to delete" do
      Mix.Tasks.Pleroma.User.run(["rm", "nonexistent"])

      assert_received {:mix_shell, :error, [message]}
      assert message =~ "No local user"
    end
  end

  describe "running toggle_activated" do
    test "user is deactivated" do
      user = insert(:user)

      Mix.Tasks.Pleroma.User.run(["toggle_activated", user.nickname])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ " deactivated"

      user = User.get_by_nickname(user.nickname)
      assert user.info.deactivated
    end

    test "user is activated" do
      user = insert(:user, info: %{deactivated: true})

      Mix.Tasks.Pleroma.User.run(["toggle_activated", user.nickname])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ " activated"

      user = User.get_by_nickname(user.nickname)
      refute user.info.deactivated
    end

    test "no user to toggle" do
      Mix.Tasks.Pleroma.User.run(["toggle_activated", "nonexistent"])

      assert_received {:mix_shell, :error, [message]}
      assert message =~ "No user"
    end
  end

  describe "running unsubscribe" do
    test "user is unsubscribed" do
      followed = insert(:user)
      user = insert(:user, %{following: [User.ap_followers(followed)]})

      Mix.Tasks.Pleroma.User.run(["unsubscribe", user.nickname])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "Deactivating"

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "Unsubscribing"

      # Note that the task has delay :timer.sleep(500)
      assert_received {:mix_shell, :info, [message]}
      assert message =~ "Successfully unsubscribed"

      user = User.get_by_nickname(user.nickname)
      assert length(user.following) == 0
      assert user.info.deactivated
    end

    test "no user to unsubscribe" do
      Mix.Tasks.Pleroma.User.run(["unsubscribe", "nonexistent"])

      assert_received {:mix_shell, :error, [message]}
      assert message =~ "No user"
    end
  end

  describe "running set" do
    test "All statuses set" do
      user = insert(:user)

      Mix.Tasks.Pleroma.User.run(["set", user.nickname, "--moderator", "--admin", "--locked"])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ ~r/Moderator status .* true/

      assert_received {:mix_shell, :info, [message]}
      assert message =~ ~r/Locked status .* true/

      assert_received {:mix_shell, :info, [message]}
      assert message =~ ~r/Admin status .* true/

      user = User.get_by_nickname(user.nickname)
      assert user.info.is_moderator
      assert user.info.locked
      assert user.info.is_admin
    end

    test "All statuses unset" do
      user = insert(:user, info: %{is_moderator: true, locked: true, is_admin: true})

      Mix.Tasks.Pleroma.User.run([
        "set",
        user.nickname,
        "--no-moderator",
        "--no-admin",
        "--no-locked"
      ])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ ~r/Moderator status .* false/

      assert_received {:mix_shell, :info, [message]}
      assert message =~ ~r/Locked status .* false/

      assert_received {:mix_shell, :info, [message]}
      assert message =~ ~r/Admin status .* false/

      user = User.get_by_nickname(user.nickname)
      refute user.info.is_moderator
      refute user.info.locked
      refute user.info.is_admin
    end

    test "no user to set status" do
      Mix.Tasks.Pleroma.User.run(["set", "nonexistent", "--moderator"])

      assert_received {:mix_shell, :error, [message]}
      assert message =~ "No local user"
    end
  end

  describe "running reset_password" do
    test "password reset token is generated" do
      user = insert(:user)

      assert capture_io(fn ->
               Mix.Tasks.Pleroma.User.run(["reset_password", user.nickname])
             end) =~ "URL:"

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "Generated"
    end

    test "no user to reset password" do
      Mix.Tasks.Pleroma.User.run(["reset_password", "nonexistent"])

      assert_received {:mix_shell, :error, [message]}
      assert message =~ "No local user"
    end
  end

  describe "running invite" do
    test "invite token is generated" do
      assert capture_io(fn ->
               Mix.Tasks.Pleroma.User.run(["invite"])
             end) =~ "http"

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "Generated"
    end
  end
end