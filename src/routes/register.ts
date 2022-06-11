import type {RequestHandler} from "./__types/register"

export const post: RequestHandler = async ({request}) => {
  const form = await request.formData()

  return {
    status: 200,
  }
}
