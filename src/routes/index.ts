import type {RequestHandler} from "./__types/index"
import {clearDatabase, insertAdmins, insertUsers} from "../lib/models/mock/seedUsers"
import {insertPlaces} from "../lib/models/mock/seedPlaces"

export const get: RequestHandler = async ({locals}) => {
  return {
    status: 202,
    body: {
      user: locals.user,
    },
  }
}

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()

  if (form.has("insertUsers")) {
    await clearDatabase()
    await insertUsers(500)
    await insertAdmins(2)
  } else if (form.has("insertPlaces")) {
    await insertPlaces({
      buildingsCount: 20,
      floors: 6,
      roomsPerFloor: 40,
      workplacesPerRoom: 10,
    })
  }

  return {
    status: 200,
  }
}
