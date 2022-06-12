import {MOCK_ADMIN} from "../../src/lib/models/mock/admin"
import {UserType} from "../../src/lib/models/user"

describe("navigation", function () {
  describe("nav sizes", function () {
    before(function () {
      cy.dropCollection("sessions", {failSilently: true})
      cy.dropCollection("users", {failSilently: true})
      cy.insertOne(
        {
          name: MOCK_ADMIN.username,
          matrikelNumber: MOCK_ADMIN.matrikelNumber,
          userType: UserType.ADMIN,
          password: MOCK_ADMIN.password,
        },
        {collection: "users"},
      )
    })

    it("should have an expanded logo at >=640w", function () {
      cy.visit("/")

      cy.viewport(640, 480)
      cy.get("nav").find("svg[viewBox='0 0 5926 912']").should("have.css", "display", "block")
      cy.get("nav").find("svg[viewBox='0 0 1024 1024']").should("have.css", "display", "none")

      cy.viewport(639, 480)
      cy.get("nav").find("svg[viewBox='0 0 5926 912']").should("have.css", "display", "none")
      cy.get("nav").find("svg[viewBox='0 0 1024 1024']").should("have.css", "display", "block")
    })

    const sizes: Array<Cypress.ViewportPreset | number> = ["iphone-se2", "iphone-xr", 640, "macbook-11"]

    for (const size of sizes) {
      const testCase = function () {
        if (typeof size === "number") {
          cy.viewport(size, 768)
        } else {
          cy.viewport(size)
        }
        cy.visit("/")

        cy.get("nav").then(nav => {
          cy.get("nav > a").then(logo => {
            cy.get("nav > ul").then(navItems => {
              expect(logo.outerWidth()! + navItems.outerWidth()!).to.be.lessThan(nav.width()!)
            })
          })
        })
      }

      it(`should not bleed out of ${typeof size === "number" ? size + "w" : size} (logged out)`, testCase)
      it(`should not bleed out of ${typeof size === "number" ? size + "w" : size} (logged in)`, function () {
        testCase()
      })
    }
  })
})
