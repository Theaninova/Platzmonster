import type {RequestHandler} from "@sveltejs/kit"
import {Place, PlaceType} from "../../../lib/models/place"
import type {IPlace} from "../../../lib/models/place"
import {searchFormNames} from "../../../lib/models/form-names/search"

export interface SearchResult<T> {
  results: T[]
  count: number
  page: number
  entriesPerPage: number
}

export const post: RequestHandler<Record<string, string>, SearchResult<IPlace>> = async ({
  request,
  locals,
}) => {
  const form = await request.formData()
  const query = (form.get(searchFormNames.search) as string) || ""
  const page = Number.parseInt(form.get(searchFormNames.page) as string) || 0
  const entriesPerPage = Number.parseInt(form.get(searchFormNames.entriesPerPage) as string) || 20

  const action = query === "*" || !query ? {} : {$text: {$search: query}}

  const count = await Place.find(action).countDocuments()
  const result = await Place.find(action)
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
