import mongoose from "mongoose"

export enum UserType {
  ADMIN = "admin",
  USER = "user",
}

const UserSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  matrikelNumber: {
    required: true,
    type: Number,
  },
  userType: {
    required: true,
    type: String,
  },
  // TODO: make this not as unsafe as it is
  password: {
    required: true,
    type: String,
  },
})

export const User = mongoose.model("User", UserSchema)

interface A {
  name: string
  matrikelNumber: number
}
