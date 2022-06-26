import {PASSWORD_SALT_ROUNDS, User} from "$lib/models/user"
import bcrypt from "bcrypt"
import type {RequestHandler} from "./__types/register"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()

  await new User({
    name: form.get("name") as string,
    matrikelNumber: form.get("matrikelnummer") as string,
    userType: form.get("registerusertype") as string,
    firstname: form.get("vorname") as string,
    lastname: form.get("nachname") as string,
    email: form.get("email") as string,
    password: await bcrypt.hash(form.get("password") as string, PASSWORD_SALT_ROUNDS),
  }).save()

  return {
    status: 200,
  }
}
