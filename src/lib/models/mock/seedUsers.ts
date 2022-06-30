import {PASSWORD_SALT_ROUNDS, User, UserType} from "../user"
import bcrypt from "bcrypt"
import mockUsers from "./MOCK_USERS.json"
import {MOCK_ADMIN} from "./admin"

export type AccountInfo = typeof MOCK_ADMIN

/**
 * @see insertUsers
 *
 * @param count
 */
export async function insertAdmins(count: number): Promise<AccountInfo[]> {
  return insertUsers(count, UserType.ADMIN)
}

/**
 * Creates random users (up to 1000) and stores them in the database.
 *
 * You can retrieve the login info from the returned array.
 * Admins are taken from the back, users from the front.
 *
 * If you insert admins, you will always be guaranteed to have the user
 * "admin" with the password "123456".
 *
 * @param count
 * @param userType
 */
export async function insertUsers(count: number, userType = UserType.USER): Promise<AccountInfo[]> {
  const accounts = userType === UserType.USER ? mockUsers.slice(0, count) : mockUsers.slice(-(count - 1))
  if (userType === UserType.ADMIN) accounts.push(MOCK_ADMIN)

  await User.insertMany(
    await Promise.all(
      accounts.map(
        async ({username, matrikelNumber, password, firstName, lastName, email}) =>
          new User({
            name: username,
            matrikelNumber: matrikelNumber,
            firstname: firstName,
            lastname: lastName,
            email,
            userType,
            password: await bcrypt.hash(password, PASSWORD_SALT_ROUNDS),
          }),
      ),
    ),
  )

  return accounts
}

export async function clearDatabase(): Promise<void> {
  // await User.deleteMany({})
}
