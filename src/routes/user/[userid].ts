import type {RequestHandler} from "./__types/[userid]"
import {User} from "../../lib/models/user"

export const get: RequestHandler = async ({params}) => {
  const user = await User.findById(params.userid)

  if (user) {
    return {
      body: {
        item: JSON.parse(JSON.stringify(user)),
      },
    }
  } else {
    return {
      status: 404,
    }
  }
}
