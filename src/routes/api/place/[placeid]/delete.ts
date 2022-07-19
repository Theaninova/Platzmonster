import type {RequestHandler} from "@sveltejs/kit"
import {UserType} from "../../../../lib/models/user"
import {Place} from "../../../../lib/models/place"

export const POST: RequestHandler = async ({request, locals}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 401,
      body: "Unauthorized",
    }
  }

  const form = await request.formData()

  const user = await Place.findByIdAndDelete(form.get("delete"))

  if (user) {
    return {
      headers: {location: "/admin"},
      status: 302,
    }
  }
  return {
    status: 401,
  }
}
