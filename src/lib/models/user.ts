import mongoose from "mongoose"

export const PASSWORD_SALT_ROUNDS = 10

export enum UserType {
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  name: string
  matrikelNumber: number
  userType: UserType
  password: string
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
  password: {
    required: true,
    type: String,
  },
})

export const User = mongoose.model<IUser>("User", UserSchema)
