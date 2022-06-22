import {PASSWORD_SALT_ROUNDS, User} from "$lib/models/user"
import bcrypt from "bcrypt"
import type {RequestHandler} from "./__types/register"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()

  await new User({
    name: form.get("name") as string,
    matrikelNumber: form.get("matrikelnummer") as string,
    userType: form.get("registerusertype") as string,
    password: await bcrypt.hash(form.get("password") as string, PASSWORD_SALT_ROUNDS),
  }).save()

  return {
    status: 200,
  }
}
