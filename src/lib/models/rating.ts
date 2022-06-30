import mongoose from "mongoose"

export interface IRatingRaw {
  userId: string
  associatedId: string
  rating: number // 0..5 float
  category: string
  medal?: boolean
}

export interface IRating extends IRatingRaw {
  _id: string
}

const RatingSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  associatedId: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  },
  category: {
    required: true,
    type: String,
  },
  medal: {
    type: Boolean,
  },
})

export const Rating = mongoose.model<IRatingRaw>("Rating", RatingSchema)
