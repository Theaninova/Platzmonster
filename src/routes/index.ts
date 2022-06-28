import type {RequestHandler} from "./__types/index"
import {clearDatabase, insertAdmins, insertUsers} from "../lib/models/mock/seed"

export const get: RequestHandler = async ({locals}) => {
  return {
    status: 202,
    body: {
      user: locals.user,
    },
  }
}

export const post: RequestHandler = async () => {
  await clearDatabase()
  await insertUsers(500)
  await insertAdmins(2)

  return {
    status: 200,
  }
}
