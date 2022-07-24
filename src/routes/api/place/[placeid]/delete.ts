import type {RequestHandler} from "./__types/delete"
import {UserType} from "../../../../lib/models/user"
import {Place} from "../../../../lib/models/place"

export const POST: RequestHandler = async ({locals, params}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 401,
      body: "Unauthorized",
    }
  }

  const user = await Place.findByIdAndDelete(params.placeid)

  if (user) {
    return {
      status: 200,
    }
  }
  return {
    status: 404,
  }
}
