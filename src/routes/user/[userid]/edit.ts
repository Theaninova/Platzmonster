import {User} from "../../../lib/models/user"
import type {RequestHandler} from "./__types/edit"
import {userDataFormNames} from "../../../lib/models/form-names/user-data"

export const get: RequestHandler = async ({params}) => {
  return {
    body: {
      user: JSON.parse(JSON.stringify(await User.findById(params.userid))),
    },
  }
}

export const post: RequestHandler = async ({request, params}) => {
  const form = await request.formData()

  const name = form.get(userDataFormNames.name) as string
  // CAREFUL WITH PASSWORDS, THEY ARE NOT PLAIN TEXT IN THE DATABASE

  const user = await User.findByIdAndUpdate(params.userid, {})

  return {
    status: 200,
  }
}
