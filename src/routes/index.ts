import {PASSWORD_SALT_ROUNDS, User, UserType} from "../lib/models/user"
import type {RequestHandler} from "./__types/index"
import {logIn, logOut} from "../lib/session/sessionHandler"
import bcrypt from "bcrypt"

export const get: RequestHandler = async ({locals}) => {
  return {
    status: 200,
    body: {
      user: locals.user,
    },
  }
}

export const post: RequestHandler = async ({locals, request}) => {
  const data = await request.formData()

  if (data.has("logIn")) {
    const cookies = (await logIn("Tom", "adslfkjad")) as string

    return {
      status: 302,
      headers: {
        "location": "/",
        "Set-Cookie": cookies,
      },
    }
  } else if (data.has("logOut")) {
    const cookies = await logOut(locals.sessionId)

    return {
      status: 302,
      headers: {
        "location": "/",
        "Set-Cookie": cookies,
      },
    }
  } else if (data.has("insert")) {
    await new User({
      name: "John",
      matrikelNumber: 123423,
      userType: UserType.ADMIN,
      password: await bcrypt.hash("vogel", PASSWORD_SALT_ROUNDS),
    }).save()
    await new User({
      name: "Simon",
      matrikelNumber: 232433,
      userType: UserType.USER,
      password: await bcrypt.hash("abcdef", PASSWORD_SALT_ROUNDS),
    }).save()
    await new User({
      name: "Tom",
      matrikelNumber: 438623,
      userType: UserType.USER,
      password: await bcrypt.hash("adslfkjad", PASSWORD_SALT_ROUNDS),
    }).save()
    await new User({
      name: "Simon 2",
      matrikelNumber: 232433,
      userType: UserType.USER,
      password: await bcrypt.hash("aasdtgerf", PASSWORD_SALT_ROUNDS),
    }).save()

    return {
      status: 200,
    }
  }

  return {
    status: 400,
  }
}
