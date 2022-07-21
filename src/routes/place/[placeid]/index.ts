import type {RequestHandler} from "./__types/index"
import {Place} from "../../../lib/models/place"
import {Rating} from "../../../lib/models/rating"
import {Reservation} from "../../../lib/models/reservation"
import {reservationDataForm} from "../../../lib/models/form-names/reservationData"

export const GET: RequestHandler = async ({params}) => {
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

export const POST: RequestHandler = async ({request, params, locals}) => {
  const form = await request.formData()

  const from = new Date(form.get(reservationDataForm.from) as string)
  const to = new Date(form.get(reservationDataForm.to) as string)
  if (from >= to) {
    return {
      status: 400,
      body: "Ungültige Zeitangabe",
    }
  }

  if (from < new Date()) {
    return {
      status: 400,
      body: "Reservierung kann nicht in der Vergangenheit erfolgen",
    }
  }

  const existingReservation = await Reservation.find({
    to: {$gte: from},
    from: {$lte: to},
    reservedId: params.placeid,
  })

  if (existingReservation.length > 0) {
    return {
      status: 400,
      body: `Von ${existingReservation.map(it => it.reservedId).join(", ")} bereits reserviert`,
    }
  }

  await new Reservation({
    from,
    to,
    userId: locals.user?._id.toString(),
    reservedId: params.placeid,
  }).save()

  return {
    status: 201,
  }
}
