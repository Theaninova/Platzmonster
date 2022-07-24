import {User, UserType} from "../../../../lib/models/user"
import type {RequestHandler} from "./__types/delete"

export const POST: RequestHandler = async ({locals, params}) => {
  if (locals.user?.userType !== UserType.ADMIN) {
    return {
      status: 401,
      body: "Unauthorized",
    }
  }

  const user = await User.findByIdAndDelete(params.userid)

  if (user) {
    return {
      status: 200,
    }
  }

  return {
    status: 404,
  }
}
