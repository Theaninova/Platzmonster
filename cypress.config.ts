import {defineConfig} from "cypress"
import cypressMongo from "cypress-mongodb"

export default defineConfig({
  e2e: {
    specPattern: "cypress/**/*.spec.{ts,js}",
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      void cypressMongo.configurePlugin(on)
    },
    env: {
      mongodb: {
        uri: "mongodb://localhost:27017",
        database: "platzmonster-e2e",
      },
    },
  },
})
