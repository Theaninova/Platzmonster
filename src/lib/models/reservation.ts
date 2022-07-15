import mongoose from "mongoose"

export interface IReservationRaw {
  userId: string
  reservedId: string
  from: Date
  to: Date
}

export interface IReservation extends IReservationRaw {
  _id: string
}

const ReservationSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  reservedId: {
    required: true,
    type: String,
  },
  from: {
    required: true,
    type: Date,
  },
  to: {
    required: true,
    type: Date,
  },
})

export const Reservation = mongoose.model<IReservationRaw>("Reservation", ReservationSchema)
