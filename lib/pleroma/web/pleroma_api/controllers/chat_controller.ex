# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only
defmodule Pleroma.Web.PleromaAPI.ChatController do
  use Pleroma.Web, :controller

  alias Pleroma.Chat
  alias Pleroma.Object
  alias Pleroma.Pagination
  alias Pleroma.Plugs.OAuthScopesPlug
  alias Pleroma.Repo
  alias Pleroma.User
  alias Pleroma.Web.CommonAPI
  alias Pleroma.Web.PleromaAPI.ChatMessageView
  alias Pleroma.Web.PleromaAPI.ChatView

  import Ecto.Query

  # TODO
  # - Error handling

  plug(
    OAuthScopesPlug,
    %{scopes: ["write:statuses"]} when action in [:post_chat_message, :create]
  )

  plug(
    OAuthScopesPlug,
    %{scopes: ["read:statuses"]} when action in [:messages, :index]
  )

  defdelegate open_api_operation(action), to: Pleroma.Web.ApiSpec.ChatOperation

  def post_chat_message(%{assigns: %{user: %{id: user_id} = user}} = conn, %{
        "id" => id,
        "content" => content
      }) do
    with %Chat{} = chat <- Repo.get_by(Chat, id: id, user_id: user_id),
         %User{} = recipient <- User.get_cached_by_ap_id(chat.recipient),
         {:ok, activity} <- CommonAPI.post_chat_message(user, recipient, content),
         message <- Object.normalize(activity) do
      conn
      |> put_view(ChatMessageView)
      |> render("show.json", for: user, object: message, chat: chat)
    end
  end

  def messages(%{assigns: %{user: %{id: user_id} = user}} = conn, %{"id" => id} = params) do
    with %Chat{} = chat <- Repo.get_by(Chat, id: id, user_id: user_id) do
      messages =
        from(o in Object,
          where: fragment("?->>'type' = ?", o.data, "ChatMessage"),
          where:
            fragment(
              """
              (?->>'actor' = ? and ?->'to' = ?) 
              OR (?->>'actor' = ? and ?->'to' = ?) 
              """,
              o.data,
              ^user.ap_id,
              o.data,
              ^[chat.recipient],
              o.data,
              ^chat.recipient,
              o.data,
              ^[user.ap_id]
            )
        )
        |> Pagination.fetch_paginated(params)

      conn
      |> put_view(ChatMessageView)
      |> render("index.json", for: user, objects: messages, chat: chat)
    else
      _ ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "not found"})
    end
  end

  def index(%{assigns: %{user: %{id: user_id}}} = conn, params) do
    chats =
      from(c in Chat,
        where: c.user_id == ^user_id,
        order_by: [desc: c.updated_at]
      )
      |> Pagination.fetch_paginated(params)

    conn
    |> put_view(ChatView)
    |> render("index.json", chats: chats)
  end

  def create(%{assigns: %{user: user}} = conn, params) do
    recipient = params["ap_id"] |> URI.decode_www_form()

    with {:ok, %Chat{} = chat} <- Chat.get_or_create(user.id, recipient) do
      conn
      |> put_view(ChatView)
      |> render("show.json", chat: chat)
    end
  end
end
