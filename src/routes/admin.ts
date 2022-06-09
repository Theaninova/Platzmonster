import {User} from "../lib/models/user"
import type {RequestHandler} from "./__types/admin"

export async function get() {
  return {
    body: {
      users: await User.find(),
    },
  }
}

export const post: RequestHandler = async ({request}) => {
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
