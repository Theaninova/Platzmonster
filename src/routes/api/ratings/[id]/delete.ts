import type {RequestHandler} from "./__types/delete"
import {UserType} from "../../../../lib/models/user"
import {Rating} from "../../../../lib/models/rating"

export const POST: RequestHandler = async ({locals, params}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 401,
      body: "Unauthorized",
    }
  }

  const reservation = await Rating.findByIdAndDelete(params.id)

  if (reservation) {
    return {
      status: 200,
    }
  }
  return {
    status: 404,
  }
}
