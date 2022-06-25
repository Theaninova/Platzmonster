import type {RequestHandler} from "@sveltejs/kit"
import {User} from "../lib/models/user"
import {formNames} from "../lib/search"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()
  const query = (form.get(formNames.search) as string) || ""
  const page = Number.parseInt(form.get(formNames.page) as string) || 0
  const entriesPerPage = Number.parseInt(form.get(formNames.entriesPerPage) as string) || 20

  const result = await User.find(query === "*" ? {} : {$text: {$search: query}})
    .skip(page * entriesPerPage)
    .limit(entriesPerPage)

  return {
    body: {
      searchResult: JSON.parse(JSON.stringify(result)),
    },
  }
}
