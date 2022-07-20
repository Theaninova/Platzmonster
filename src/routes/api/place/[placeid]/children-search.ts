import type {RequestHandler} from "./__types/children-search"
import {searchFormNames} from "../../../../lib/models/form-names/search"
import {Place} from "../../../../lib/models/place"

export const POST: RequestHandler = async ({request, params}) => {
  const form = await request.formData()
  const query = (form.get(searchFormNames.search) as string) || ""
  const page = Number.parseInt(form.get(searchFormNames.page) as string) || 0
  const entriesPerPage = Number.parseInt(form.get(searchFormNames.entriesPerPage) as string) || 20

  const action =
    query === "*" || !query ? {parentId: params.placeid} : {$text: {$search: query}, parentId: params.placeid}

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
