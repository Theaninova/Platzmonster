import {PASSWORD_SALT_ROUNDS, User} from "$lib/models/user"
import bcrypt from "bcrypt"
import type {RequestHandler} from "./__types/register"
import {logIn} from "../lib/session/sessionHandler"
import {registerFormNames} from "../lib/models/form-names/register"

export const post: RequestHandler = async ({request, locals}) => {
  const form = await request.formData()

  await new User({
    name: form.get(registerFormNames.name) as string,
    matrikelNumber: form.get(registerFormNames.matrikelNumber) as string,
    userType: form.get(registerFormNames.userType) as string,
    firstname: form.get(registerFormNames.firstName) as string,
    lastname: form.get(registerFormNames.lastName) as string,
    email: form.get(registerFormNames.email) as string,
    password: await bcrypt.hash(form.get(registerFormNames.password) as string, PASSWORD_SALT_ROUNDS),
  }).save()

  console.log(locals)

  if (!locals.user) {
    const cookies = await logIn(
      form.get(registerFormNames.name) as string,
      form.get(registerFormNames.password) as string,
    )

    return {
      status: 302,
      headers: {
        "Location": "/",
        "Set-Cookie": cookies,
      },
    }
  }

  return {
    status: 200,
  }
}
