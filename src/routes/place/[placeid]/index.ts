import type {RequestHandler} from "./__types/index"
import {Place, PlaceType} from "../../../lib/models/place"
import {Rating} from "../../../lib/models/rating"

export const get: RequestHandler = async ({params, locals}) => {
  const place = await Place.findById(params.placeid)
  const rating = await Rating.findById(params.placeid)

  if (place) {
    return {
      body: {
        item: JSON.parse(JSON.stringify(place)),
        rating: JSON.parse(JSON.stringify(rating)),
      },
    }
  } else {
    return {
      status: 404,
    }
  }
}
