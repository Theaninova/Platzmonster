import type {RequestHandler} from "@sveltejs/kit"
import {logIn} from "../../../lib/session/sessionHandler"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()
  form.get("name")

  const cookies = await logIn("John", "vogel")

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
