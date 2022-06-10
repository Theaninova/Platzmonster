import type {FormResponseHandler} from "./form"
import {session} from "$app/stores"

export const refreshUser: FormResponseHandler = async () => {
  const response = await fetch("/api/auth/user.json", {
    headers: {
      accept: "application/json",
    },
  })
  const user = await response.json()

  console.log(user)

  session.update(it => ({
    ...it,
    user,
  }))
}
