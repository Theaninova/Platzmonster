import mongoose from "mongoose"
import type {Handle} from "@sveltejs/kit"

const connection = mongoose.connect("mongodb://localhost:27017/platzmoster")

export const handle: Handle = async ({event, resolve}) => {
  await connection
  return resolve(event)
}
