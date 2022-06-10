import type {RequestHandler} from "@sveltejs/kit"

export const get: RequestHandler = async ({locals}) => {
  return {
    body: locals.user ? JSON.parse(JSON.stringify(locals.user)) : null,
  }
}
