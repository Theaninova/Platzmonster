import {Place} from "../place"
import type {IRatingRaw} from "../rating"
import {Rating} from "../rating"
import {User} from "../user"

export interface SeedRatingsConfig {
  placePercentage: number
  ratingsPerPlace: number
  categories: string[]
}

export async function insertRatings({placePercentage, ratingsPerPlace, categories}: SeedRatingsConfig) {
  const ratingsCount = Math.floor((await Place.find({}).countDocuments()) * placePercentage)

  const places = await Place.aggregate([{$sample: {size: ratingsCount}}])
  const users = await User.find({})

  const ratings = places.flatMap<IRatingRaw>(place =>
    Array.from({length: Math.floor(Math.random() * ratingsPerPlace)}, () => ({
      associatedId: place._id.toString(),
      category: categories[Math.floor(Math.random() * categories.length)],
      medal: Math.random() > 0.9,
      rating: Math.max(Math.min(Math.ceil(Math.random() * 5), 5), 1),
      userId: users[Math.floor(Math.random() * users.length)]._id.toString(),
    })),
  )

  await Rating.insertMany(ratings)
}
