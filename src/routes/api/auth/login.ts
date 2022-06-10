import type {RequestHandler} from "@sveltejs/kit"
import {logIn} from "../../../lib/session/sessionHandler"

export const post: RequestHandler = async () => {
  const cookies = await logIn("John", "vogel")

  return cookies
    ? {
        headers: {
          "Set-Cookie": cookies,
        },
      }
    : {
        status: 401,
      }
}
