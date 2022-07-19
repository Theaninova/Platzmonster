import type {RequestHandler} from "./__types/edit"
import {placeFormNames} from "../../../lib/models/form-names/place-data"
import {Place} from "../../../lib/models/place"
import type {IPlaceRaw, PlaceType} from "../../../lib/models/place"

export const GET: RequestHandler = async ({params}) => {
  return {
    body: {
      place: JSON.parse(JSON.stringify(await Place.findById(params.placeid))),
    },
  }
}

export const POST: RequestHandler = async ({request, params}) => {
  const form = await request.formData()

  const place: IPlaceRaw = {
    type: form.get(placeFormNames.type) as PlaceType,
    name: form.get(placeFormNames.name) as string,
    shortName: form.get(placeFormNames.shortname) as string,
    address: {
      street: form.get(placeFormNames.address) as string,
      streetNumber: form.get(placeFormNames.streetNumber) as string,
      additionalAddressInfo: form.get(placeFormNames.additionalAddressInfo) as string,
      zip: form.get(placeFormNames.zip) as string,
      city: form.get(placeFormNames.city) as string,
    },
    description: form.get(placeFormNames.description) as string,
  }
  await Place.findByIdAndUpdate(params.placeid, place)
  return {
    status: 200,
  }
}
