import type {RequestHandler} from "@sveltejs/kit"
import {User} from "./models/user"

export const formNames = {
  search: "search",
  page: "page",
  entriesPerPage: "entriesPerPage",
}
