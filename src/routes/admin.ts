/** @type {import('./__types/[id]').RequestHandler} */
import {User} from "../lib/models/user"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function get({params}) {
  return {
    body: {
      users: await User.find(),
    },
  }
}

/** @type {import('./index').RequestHandler} */
export async function post({request}) {
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
