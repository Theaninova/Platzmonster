import type {RequestHandler} from "@sveltejs/kit"

export const GET: RequestHandler = async ({locals}) => {
  return {
    body: locals.user ? JSON.parse(JSON.stringify(locals.user)) : null,
  }
}
