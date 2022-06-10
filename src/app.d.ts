/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare namespace App {
  interface Locals {
    user?: import("mongoose").HydratedDocument<import("./lib/models/user").IUser> | null
    sessionId?: string
  }

  // interface Platform {}

  interface Session {
    user?:
      | (import("./lib/models/user").IUser & {
          _id: string
          __v: number
        })
      | null
  }

  // interface Stuff {}
}
