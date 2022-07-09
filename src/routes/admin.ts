import {User} from "../lib/models/user"
import type {RequestHandler} from "./__types/admin"

export const searchFormNames = {
  search: "search",
  page: "page",
  entriesPerPage: "entriesPerPage",
  next: "next",
  prev: "prev",
}


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

  await User.findByIdAndUpdate(form.get("edit"), {
    name: form.get("editName"),
    password: form.get("editPassword"),
  })

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
