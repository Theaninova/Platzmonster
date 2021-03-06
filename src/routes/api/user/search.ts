import type {RequestHandler} from "@sveltejs/kit"
import {User, UserType} from "../../../lib/models/user"
import type {IUser} from "../../../lib/models/user"
import {searchFormNames} from "../../../lib/models/form-names/search"

export interface SearchResult<T> {
  results: T[]
  count: number
  page: number
  entriesPerPage: number
}

export const POST: RequestHandler<Record<string, string>, SearchResult<IUser>> = async ({
  request,
  locals,
}) => {
  const form = await request.formData()
  const query = (form.get(searchFormNames.search) as string) || ""
  const page = Number.parseInt(form.get(searchFormNames.page) as string) || 0
  const entriesPerPage = Number.parseInt(form.get(searchFormNames.entriesPerPage) as string) || 20

  const action = query === "*" || !query ? {} : {$text: {$search: query}}

  const count = await User.find(action).countDocuments()
  const result = await User.find(action, locals.user?.userType === UserType.ADMIN ? {} : {password: 0})
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
