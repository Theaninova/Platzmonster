import type {RequestHandler} from "./__types/register"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()

  console.log(form.get("name"))

  return {
    status: 200,
  }
}
