import type {RequestHandler} from "./__types/map"
import {Place, PlaceType} from "../lib/models/place"

export const get: RequestHandler = async () => {
  const buildings = await Place.find({type: PlaceType.BUILDING})
  console.log(buildings.length)

  return {
    body: {
      buildings: JSON.parse(JSON.stringify(buildings)),
    },
  }
}
