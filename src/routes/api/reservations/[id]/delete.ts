import type {RequestHandler} from "./__types/delete"
import {UserType} from "../../../../lib/models/user"
import {Reservation} from "../../../../lib/models/reservation"

export const POST: RequestHandler = async ({locals, params}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 401,
      body: "Unauthorized",
    }
  }

  const reservation = await Reservation.findByIdAndDelete(params.id)

  if (reservation) {
    return {
      status: 200,
    }
  }
  return {
    status: 404,
  }
}
