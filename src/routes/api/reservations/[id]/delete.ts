import type {RequestHandler} from "./__types/delete"
import {UserType} from "../../../../lib/models/user"
import {Reservation} from "../../../../lib/models/reservation"

export const POST: RequestHandler = async ({locals, params}) => {
  const reservation = await Reservation.findById(params.id)
  if (!reservation) {
    return {
      status: 404,
    }
  }

  if (locals.user?.userType !== UserType.ADMIN && reservation.userId !== locals.user?._id.toString()) {
    return {
      status: 401,
      body: "Unauthorized",
    }
  }

  await reservation.deleteOne()

  return {
    status: 200,
  }
}
