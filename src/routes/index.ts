import {User, UserType} from "../lib/models/user"

export async function post() {
  await new User({
    name: "John",
    matrikelNumber: 123423,
    userType: UserType.ADMIN,
    password: "vogel",
  }).save()
  await new User({
    name: "Simon",
    matrikelNumber: 232433,
    userType: UserType.USER,
    password: "abcdef",
  }).save()
  await new User({
    name: "Tom",
    matrikelNumber: 438623,
    userType: UserType.USER,
    password: "adslfkjad",
  }).save()
  await new User({
    name: "Simon 2",
    matrikelNumber: 232433,
    userType: UserType.USER,
    password: "aasdtgerf",
  }).save()

  return {
    status: 200,
  }
}
