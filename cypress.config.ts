import {defineConfig} from "cypress"

export default defineConfig({
  e2e: {
    specPattern: "cypress/**/*.spec.{ts,js}",
    baseUrl: "http://localhost:3000",
    env: {
      mongodb: {
        uri: "mongodb://localhost:27017",
        database: "platzmonster-e2e",
      },
    },
  },
})
