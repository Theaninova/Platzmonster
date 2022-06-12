import type {RequestHandler} from "@sveltejs/kit"
import {logIn} from "../../../lib/session/sessionHandler"
import {MOCK_ADMIN} from "../../../lib/models/mock/admin"
import {User} from "$lib/models/user"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()

  const cookies = await logIn(form.get("uname") as string, form.get("psw") as string)

  return cookies
    ? {
        status: 302,
        headers: {
          "Location": "/",
          "Set-Cookie": cookies,
        },
      }
    : {
        status: 401,
      }
}
