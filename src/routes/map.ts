import type {RequestHandler} from "./__types/map"
import {Place, PlaceType} from "../lib/models/place"

export const GET: RequestHandler = async () => {
  const buildings = await Place.find({type: PlaceType.BUILDING})

  return {
    body: {
      buildings: JSON.parse(JSON.stringify(buildings)),
    },
  }
}
