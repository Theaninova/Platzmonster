import type {RequestHandler} from "@sveltejs/kit"
import {logIn} from "../../../lib/session/sessionHandler"
import {loginFormNames} from "../../../lib/models/form-names/login"

export const POST: RequestHandler = async ({request}) => {
  const form = await request.formData()

  const cookies = await logIn(
    form.get(loginFormNames.username) as string,
    form.get(loginFormNames.password) as string,
  )

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
        body: "Falscher Nutzername/Passwort",
      }
}
