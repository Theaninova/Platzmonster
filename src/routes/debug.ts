import type {RequestHandler} from "./__types/debug"
import {clearDatabase, insertAdmins, insertUsers} from "../lib/models/mock/seedUsers"
import {insertPlaces} from "../lib/models/mock/seedPlaces"
import {insertRatings} from "../lib/models/mock/seedRatings"
import {dev} from "$app/env"
import {insertReservations} from "../lib/models/mock/seedReservations"

export const GET: RequestHandler = async ({locals}) => {
  return dev
    ? {
        status: 202,
        body: {
          user: locals.user,
        },
      }
    : {status: 404}
}

export const POST: RequestHandler = async ({request}) => {
  if (!dev) {
    return {status: 404}
  }

  const form = await request.formData()

  if (form.has("insertUsers")) {
    // await clearDatabase()
    await insertUsers(1000)
    await insertAdmins(2)
  } else if (form.has("insertPlaces")) {
    await insertPlaces({
      floors: 10,
      roomsPerFloor: 40,
      workplacesPerRoom: 40,
    })
  } else if (form.has("insertRatings")) {
    await insertRatings({
      placePercentage: 0.3,
      ratingsPerPlace: 10,
      categories: ["categoryA", "categoryB"],
    })
  } else if (form.has("insertReservations")) {
    await insertReservations({
      placePercentage: 0.3,
      reservationsPerPlace: 10,
      start: Date.now(),
      duration: 1000 * 60 * 60,
      distance: 1000 * 60 * 60,
    })
  }

  return {
    status: 200,
  }
}
