import type {RequestHandler} from "@sveltejs/kit"
import {logIn} from "../../../lib/session/sessionHandler"
import {MOCK_ADMIN} from "../../../lib/models/mock/admin"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()
  form.get("name")

  const cookies = await logIn(MOCK_ADMIN.username, MOCK_ADMIN.password)

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
