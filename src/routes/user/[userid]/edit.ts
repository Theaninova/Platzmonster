import {PASSWORD_SALT_ROUNDS, User} from "../../../lib/models/user"
import type {RequestHandler} from "./__types/edit"
import {userDataFormNames} from "../../../lib/models/form-names/user-data"
import bcrypt from "bcrypt";

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


  const user = await User.findByIdAndUpdate(params.userid, {name: form.get(userDataFormNames.name) as string,
    matrikelNumber: form.get(userDataFormNames.matrikelNumber) as string,
    userType: form.get(userDataFormNames.userType) as string,
    firstname: form.get(userDataFormNames.firstName) as string,
    lastname: form.get(userDataFormNames.lastName) as string,
    email: form.get(userDataFormNames.email) as string,
    password: await bcrypt.hash(form.get(userDataFormNames.password) as string, PASSWORD_SALT_ROUNDS),

  })



  return {
    status: 200,
  }
}

