import {Place} from "../lib/models/place"
import {UserType} from "../lib/models/user"
import type {RequestHandler} from "./__types/register"
import {placeFormNames} from "../lib/models/form-names/place-data";

export const POST: RequestHandler = async ({request, locals}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 409,
    }
  }

  const form = await request.formData()

  await new Place({
    type: form.get(placeFormNames.type) as string,
    name: form.get(placeFormNames.name) as string,
    shortname: form.get(placeFormNames.shortname) as string,
    address: form.get(placeFormNames.address) as string,
    number: form.get(placeFormNames.streetNumber) as string,
    additionalInfo: form.get(placeFormNames.additionalAddressInfo) as string,
    zip: form.get(placeFormNames.zip) as string,
    city: form.get(placeFormNames.city) as string,
    description: form.get(placeFormNames.description) as string,
  }).save()

  return {
    status: 200,
  }
}
