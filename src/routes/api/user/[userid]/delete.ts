import {User, UserType} from "../../../../lib/models/user"
import type {RequestHandler} from "@sveltejs/kit"

export const post: RequestHandler = async ({request, locals}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 401,
      body: "Unauthorized",
    }
  }

  const form = await request.formData()

  const user = await User.findByIdAndDelete(form.get("delete"))

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
