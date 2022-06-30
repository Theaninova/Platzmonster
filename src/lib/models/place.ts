import type {Point, Polygon} from "geojson"
import mongoose from "mongoose"
import {PointSchema, PolygonSchema} from "./geojson"

export enum PlaceType {
  BUILDING = "building",
  ROOM = "room",
  WORK_PLACE = "workplace",
}

export interface IPlaceRaw {
  name: string
  type: PlaceType
  description?: string
  parentId?: string
  location?: Point
  polygon?: Polygon
}

export interface IPlace extends IPlaceRaw {
  _id: string
}

const PlaceSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  parentId: {
    type: String,
  },
  location: {
    type: PointSchema,
  },
  polygon: {
    type: PolygonSchema,
  },
})

export const Place = mongoose.model<IPlaceRaw>("Place", PlaceSchema)
