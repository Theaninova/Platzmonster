import mongoose from "mongoose"
import type {GetSession, Handle} from "@sveltejs/kit"
import {parse} from "cookie"
import {SESSION_COOKIE_NAME} from "./lib/session/sessionHandler"
import {Session} from "./lib/models/session"
import {User} from "./lib/models/user"

const dbConfig = {
  atlasUrl: import.meta.env.VITE_MONGO_ATLAS,
  atlasUser: import.meta.env.VITE_MONGO_ATLAS_USER,
  atlasPassword: import.meta.env.VITE_MONGO_ATLAS_PASSWORD,
  database: import.meta.env.VITE_DATABASE || "platzmonster",
}

const connection = (async () => {
  if (dbConfig.atlasUrl) {
    return mongoose.connect(
      `mongodb+srv://${dbConfig.atlasUser}:${dbConfig.atlasPassword}@${dbConfig.atlasUrl}/${dbConfig.database}`,
    )
  } else {
    return mongoose.connect(`mongodb://localhost:27017/${dbConfig.database}`)
  }
})()

export const handle: Handle = async ({event, resolve}) => {
  await connection

  const cookies = parse(event.request.headers.get("cookie") || "")
  if (cookies[SESSION_COOKIE_NAME]) {
    event.locals.sessionId = cookies[SESSION_COOKIE_NAME]
    const session = await Session.findOne({sessionId: cookies[SESSION_COOKIE_NAME]})

    if (session) {
      event.locals.user = await User.findById(session.userId)
    }
  }

  return resolve(event)
}

export const getSession: GetSession = async ({locals}) => {
  return {
    user: locals.user ? JSON.parse(JSON.stringify(locals.user)) : null,
  }
}
