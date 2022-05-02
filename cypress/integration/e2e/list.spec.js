const userTest = {
  email: "test@gmail.com",
  password: "test1234",
}

describe("List and Detail", () => {
  it("should navigate login page", () => {
    cy.visit("http://localhost:3000/")
    cy.get('a[href*="login"]').click()
    cy.url().should("include", "/login")
    cy.contains("button", "Login")
  })

  it("should login", () => {
    cy.get("input[type=email]").type(userTest.email)
    cy.get("input[type=password]").type(userTest.password)
    cy.contains("button", "Login").click()
    cy.url().should("include", "/list")
  })

  it("should render list of characters", () => {
    cy.contains("Rick and Morty")
    cy.contains("Rick Sanchez")
    cy.contains("Morty Smith")
    cy.contains("Annie")
    cy.contains("button", "Load More")
  })

  it("should render more characters", () => {
    cy.contains("button", "Load More").click()
    cy.contains("Aqua Rick")
    cy.contains("Arcade Alien")
  })

  it("should show details", () => {
    cy.contains("Morty Smith").click()
    cy.contains("Character Details")
    cy.contains("Gender: Male")
    cy.contains("button", "Add to favs")
  })

  it("should add to favs", () => {
    cy.contains("button", "Add to favs").click()
    cy.contains("button", "Remove from favs")
    cy.contains("button", "Back to All Characters").click()
  })

  it("should search for characters", () => {
    cy.get("input[name=query]").type("Abradolf")
    cy.contains("button", "Search").click()
    cy.contains("Abradolf Lincler")
    cy.get("h3").should("not.contain", "Arcade Alien")
  })
})
