import type {RequestHandler} from "@sveltejs/kit";
import {searchFormNames} from "../../../lib/models/form-names/search";
import {Reservation} from "../../../lib/models/reservation";

export const POST: RequestHandler = async ({request, params}) => {
    const form = await request.formData()
    const query = (form.get(searchFormNames.search) as string) || ""
    const page = Number.parseInt(form.get(searchFormNames.page) as string) || 0
    const entriesPerPage = Number.parseInt(form.get(searchFormNames.entriesPerPage) as string) || 20

    const action =
        query === "*" || !query ? {reservedId: params.placeid} : {$text: {$search: query}  }

    const count = await Reservation.find(action).countDocuments()
    const result = await Reservation.find(action)
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
