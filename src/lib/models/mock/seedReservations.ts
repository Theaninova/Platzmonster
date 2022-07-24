import {Place, PlaceType} from "../place"
import {User} from "../user"
import {Reservation} from "../reservation"
import type {IReservationRaw} from "../reservation"

export interface SeedReservationsConfig {
  placePercentage: number
  reservationsPerPlace: number
  start: number
  duration: number
  distance: number
}

export async function insertReservations({
  placePercentage,
  reservationsPerPlace,
  start,
  duration,
  distance,
}: SeedReservationsConfig) {
  const ratingsCount = Math.floor(
    (await Place.find({type: PlaceType.WORK_PLACE}).countDocuments()) * placePercentage,
  )

  const places = await Place.aggregate([
    {$match: {type: PlaceType.WORK_PLACE}},
    {$sample: {size: ratingsCount}},
  ])
  const users = await User.find({})

  const ratings = places.flatMap<IReservationRaw>(place => {
    const ratings: Partial<IReservationRaw>[] = Array.from(
      {length: Math.floor(Math.random() * reservationsPerPlace)},
      () => ({
        reservedId: place._id.toString(),
        userId: users[Math.floor(Math.random() * users.length)]._id.toString(),
      }),
    )

    let current = start

    for (const rating of ratings) {
      rating.from = new Date(current)
      rating.to = new Date(current + Math.floor(Math.random() * duration))
      current += distance
    }

    return ratings as IReservationRaw[]
  })

  await Reservation.insertMany(ratings)
}
