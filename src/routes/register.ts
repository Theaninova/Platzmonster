import {PASSWORD_SALT_ROUNDS, User} from "$lib/models/user"
import bcrypt from "bcrypt"
import type {RequestHandler} from "./__types/register"
import {logIn} from "../lib/session/sessionHandler"
import {userDataFormNames} from "../lib/models/form-names/user-data"

export const post: RequestHandler = async ({request, locals}) => {
  const form = await request.formData()

  const user = await User.findOne({name: form.get(userDataFormNames.name)})
  if (user) {
    return {
      status: 409,
      body: "Dieser Nutzername ist bereits vergeben",
    }
  }

  const matrikelNumber = await User.findOne({matrikelNumber: form.get(userDataFormNames.matrikelNumber)})
  if (matrikelNumber) {
    return {
      status: 409,
      body: "Diese Matrikelnummer ist bereits vergeben",
    }
  }

  const email = await User.findOne({email: form.get(userDataFormNames.email)})
  if (email) {
    return {
      status: 409,
      body: "Diese E-Mail-Adresse wird bereits genutzt",
    }
  }

  await new User({
    name: form.get(userDataFormNames.name) as string,
    matrikelNumber: form.get(userDataFormNames.matrikelNumber) as string,
    userType: form.get(userDataFormNames.userType) as string,
    firstname: form.get(userDataFormNames.firstName) as string,
    lastname: form.get(userDataFormNames.lastName) as string,
    email: form.get(userDataFormNames.email) as string,
    password: await bcrypt.hash(form.get(userDataFormNames.password) as string, PASSWORD_SALT_ROUNDS),
  }).save()

  console.log(locals)

  if (!locals.user) {
    const cookies = await logIn(
      form.get(userDataFormNames.name) as string,
      form.get(userDataFormNames.password) as string,
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
