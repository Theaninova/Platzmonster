import mongoose from "mongoose"

export const SESSION_DURATION = "2d"

export interface ISession {
  createdAt: Date
  userId: mongoose.Types.ObjectId
}

const SessionSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    expires: SESSION_DURATION,
    default: Date.now,
  },
  userId: {
    required: true,
    type: String,
  },
})

export const Session = mongoose.model<ISession>("Session", SessionSchema)
