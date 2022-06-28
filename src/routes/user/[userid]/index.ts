import type {RequestHandler} from "./__types/index"
import {User, UserType} from "../../../lib/models/user"

export const get: RequestHandler = async ({params, locals}) => {
  const user = await User.findById(
    params.userid,
    locals.user?.userType === UserType.ADMIN ? {} : {password: 0},
  )

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
