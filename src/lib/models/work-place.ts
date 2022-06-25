import mongoose from "mongoose"

export interface IWorkPlace {
  name: string
}

const WorkPlaceSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
})

export const WorkPlace = mongoose.model<IWorkPlace>("WorkPlace", WorkPlaceSchema)
