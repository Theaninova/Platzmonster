import { Place } from "$lib/models/place"
import { UserType } from "$lib/models/user"
import type {RequestHandler} from "./__types/register"


export const post: RequestHandler = async ({request, locals}) => {
    if (locals.user?.userType !== UserType.ADMIN) {
        return {
          status: 409,
        }
      }

    const form = await request.formData()

    await new Place({
        type: form.get("registerplacetype") as string,
        name: form.get("regname") as string,
        shortname: form.get("regshortname") as string,
        adress: form.get("regadress") as string,
        number: form.get("regnumber") as string,
        additionalInfo: form.get("regadditional") as string,
        zip: form.get("regzip") as string,
        city: form.get("regcity") as string,
        description: form.get("regdescription") as string,
      }).save()


      return {
        status: 200,
      }

}  