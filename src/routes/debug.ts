import type {RequestHandler} from "./__types/index"
import {clearDatabase, insertAdmins, insertUsers} from "../lib/models/mock/seedUsers"
import {insertPlaces} from "../lib/models/mock/seedPlaces"
import {insertRatings} from "../lib/models/mock/seedRatings"

export const GET: RequestHandler = async ({locals}) => {
  return {
    status: 202,
    body: {
      user: locals.user,
    },
  }
}

export const POST: RequestHandler = async ({request}) => {
  const form = await request.formData()

  if (form.has("insertUsers")) {
    await clearDatabase()
    await insertUsers(500)
    await insertAdmins(2)
  } else if (form.has("insertPlaces")) {
    await insertPlaces({
      floors: 6,
      roomsPerFloor: 40,
      workplacesPerRoom: 10,
    })
  } else if (form.has("insertRatings")) {
    await insertRatings({
      placePercentage: 0.6,
      ratingsPerPlace: 10,
      categories: ["categoryA", "categoryB"],
    })
  }

  return {
    status: 200,
  }
}
