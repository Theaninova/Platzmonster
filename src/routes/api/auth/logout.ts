import type {RequestHandler} from "@sveltejs/kit"
import {logOut} from "../../../lib/session/sessionHandler"

export const post: RequestHandler = async ({locals}) => {
  const cookies = await logOut(locals.sessionId)

  return {
    status: 302,
    headers: {
      "Location": "/",
      "Set-Cookie": cookies,
    },
  }
}
