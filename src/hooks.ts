import mongoose from "mongoose"

const connection = mongoose.connect("mongodb://localhost:27017/platzmoster")

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({event, resolve}) {
  await connection
  return resolve(event)
}
