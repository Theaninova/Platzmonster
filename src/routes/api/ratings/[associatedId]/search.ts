import type {RequestHandler} from "./__types/search"
import {searchFormNames} from "../../../../lib/models/form-names/search"
import {Rating} from "../../../../lib/models/rating"

export const POST: RequestHandler = async ({request, params}) => {
  const form = await request.formData()
  const query = (form.get(searchFormNames.search) as string) || ""
  const page = Number.parseInt(form.get(searchFormNames.page) as string) || 0
  const entriesPerPage = Number.parseInt(form.get(searchFormNames.entriesPerPage) as string) || 20

  const action =
    query === "*" || !query
      ? {associatedId: params.associatedId}
      : {associatedId: params.associatedId, $text: {$search: query}}

  const count = await Rating.find(action).countDocuments()
  const result = await Rating.find(action)
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
