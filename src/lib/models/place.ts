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
  shortName?: string
  address?: {
    street: string
    streetNumber: string
    additionalAddressInfo?: string
    city: string
    zip: string
  }
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
  shortName: {
    type: String,
  },
  address: {
    street: {
      type: String,
    },
    streetNumber: {
      type: String,
    },
    additionalAddressInfo: {
      type: String,
    },
    city: {
      type: String,
    },
    zip: {
      type: String,
    },
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

PlaceSchema.index(
  {
    "name": "text",
    "description": "text",
    "address.street": "text",
    "address.city": "text",
    "address.zip": "text",
    "address.additionalAddressInfo": "text",
  },
  {
    weights: {
      "name": 5,
      "description": 1,
      "address.street": 2,
      "address.city": 2,
      "address.zip": 2,
      "address.additionalAddressInfo": 2,
    },
  },
)

export const Place = mongoose.model<IPlaceRaw>("Place", PlaceSchema)
