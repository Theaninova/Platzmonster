import type {RequestHandler} from "./__types/get-rating"
import {Rating} from "../../../../lib/models/rating"
import type {IRating} from "../../../../lib/models/rating"

export interface RatingInfo {
  rating: {
    associatedId: string
    rating: number
    medals: number
  }
  userRating: IRating
}

export const GET: RequestHandler = async ({params, locals}) => {
  const rating = await Rating.aggregate([
    {$match: {associatedId: params.associatedId}},
    {
      $group: {
        _id: "$associatedId",
        rating: {$avg: "$rating"},
        medals: {$sum: {$cond: ["$medal", 1, 0]}},
      },
    },
  ])

  const userRating = locals.user
    ? await Rating.findOne({
        userId: locals.user._id.toString(),
        associatedId: params.associatedId,
      })
    : undefined

  return {
    body: {
      rating: rating[0],
      userRating,
    },
  }
}
