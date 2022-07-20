import type {RequestHandler} from "./__types/index"
import {Place, PlaceType} from "../../../lib/models/place"
import {Rating} from "../../../lib/models/rating"
import {Reservation} from "../../../lib/models/reservation";
import {reservationDataForm} from "../../../lib/models/form-names/reservationData";

export const GET: RequestHandler = async ({params, locals}) => {
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

export const POST: RequestHandler = async ({request, locals}) => {
  const form = await request.formData()

  await new Reservation( {
    from: form.get(reservationDataForm.from),
    to: form.get(reservationDataForm.to),
  })

}