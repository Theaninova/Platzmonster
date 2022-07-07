import type {RequestHandler} from "./__types/rate"
import {Rating} from "../../../../lib/models/rating"
import {rateFormNames} from "../../../../lib/models/form-names/rate"

export const post: RequestHandler = async ({request, locals, params}) => {
  if (!locals.user) {
    return {status: 401}
  }

  await Rating.findOneAndDelete({
    userId: locals.user._id.toString(),
    associatedId: params.associatedId,
  })



  const formData = await request.formData()

  await new Rating({
    rating: formData.get(rateFormNames.rating),
    medal: formData.get(rateFormNames.medal) === "on",
    userId: locals.user._id.toString(),
    associatedId: params.associatedId,
    category: "categoryA",
  }).save()

  return {status: 200}
}
