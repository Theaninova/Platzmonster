import type {IPlace, IPlaceRaw, PlaceType} from "../../lib/models/place"
import {Place} from "../../lib/models/place"
import {UserType} from "../../lib/models/user"
import type {RequestHandler} from "../__types/register"
import {placeFormNames} from "../../lib/models/form-names/place-data"

export const POST: RequestHandler = async ({request, locals}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 409,
    }
  }

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
  console.log(place)
  await new Place(place).save()

  return {
    status: 200,
  }
}
