const userTest = {
  email: "test@gmail.com",
  password: "test1234",
}

describe("Login", () => {
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
})
