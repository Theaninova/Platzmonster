import {serialize} from "cookie"
import {User} from "../models/user"
import {Session, SESSION_DURATION} from "../models/session"
import ms from "ms"
import bcrypt from "bcrypt"

export const SESSION_DURATION_SECONDS = ms(SESSION_DURATION) / 1000

export const SESSION_COOKIE_NAME = "session_id"

export async function logIn(username: string, password: string): Promise<string | undefined> {
  const user = await User.findOne({name: username})
  if (!user || !(await bcrypt.compare(password, user.password))) return

  const session = await new Session({userId: user._id, sessionId: crypto.randomUUID()}).save()

  return serialize(SESSION_COOKIE_NAME, session.sessionId, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DURATION_SECONDS,
  })
}

export async function logOut(sessionId?: string): Promise<string> {
  await Session.findOneAndDelete({sessionId})

  return serialize(SESSION_COOKIE_NAME, "", {
    path: "/",
    expires: new Date(0),
  })
}
