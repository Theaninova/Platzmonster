import type {RequestHandler} from "@sveltejs/kit"
import {User} from "../../../lib/models/user"
import type {IUser} from "../../../lib/models/user"
import {searchFormNames} from "../../../lib/search"

export interface SearchResult<T> {
  results: T[]
  count: number
  page: number
  entriesPerPage: number
}

export const post: RequestHandler<Record<string, string>, SearchResult<IUser>> = async ({request}) => {
  const form = await request.formData()
  const query = (form.get(searchFormNames.search) as string) || ""
  const page = Number.parseInt(form.get(searchFormNames.page) as string) || 0
  console.log(form.has(searchFormNames.next))
  const entriesPerPage = Number.parseInt(form.get(searchFormNames.entriesPerPage) as string) || 20

  const action = query === "*" ? {} : {$text: {$search: query}}

  const count = await User.find(action).countDocuments()
  const result = await User.find(action)
    .skip(page * entriesPerPage)
    .limit(entriesPerPage)

  return {
    body: {
      results: JSON.parse(JSON.stringify(result)),
      count,
      page,
      entriesPerPage,
    },
  }
}
