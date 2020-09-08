defmodule Mix.Tasks.Pleroma.Email do
  use Mix.Task
  import Mix.Pleroma

  @shortdoc "Email administrative tasks"
  @moduledoc File.read!("docs/administration/CLI_tasks/email.md")

  def run(["test" | args]) do
    Mix.Pleroma.start_pleroma()

    {options, [], []} =
      OptionParser.parse(
        args,
        strict: [
          to: :string
        ]
      )

    email = Pleroma.Emails.AdminEmail.test_email(options[:to])
    {:ok, _} = Pleroma.Emails.Mailer.deliver(email)

    shell_info("Test email has been sent to #{inspect(email.to)} from #{inspect(email.from)}")
  end

  def run(["resend_confirmation_emails"]) do
    start_pleroma()

    Pleroma.User.Query.build(%{
      local: true,
      deactivated: false,
      confirmation_pending: true,
      invisible: false
    })
    |> Pleroma.RepoStreamer.chunk_stream(500)
    |> Stream.each(fn users ->
      users
      |> Enum.each(fn user -> Pleroma.User.try_send_confirmation_email(user) end)
    end)
    |> Stream.run()
  end
end
