describe("Navigation", () => {
  it("should navigate signup page", () => {
    cy.visit("http://localhost:3000/")
    cy.get('a[href*="signup"]').click()
    cy.url().should("include", "/signup")
    cy.contains("button", "Signup")
  })

  it("should navigate login page", () => {
    cy.visit("http://localhost:3000/")
    cy.get('a[href*="login"]').click()
    cy.url().should("include", "/login")
    cy.contains("button", "Login")
  })

  it("should fail to navigate to the list", () => {
    cy.visit("http://localhost:3000/list")
    cy.url().should("not.include", "/list")
    cy.url().should("include", "/login")
  })

  it("should fail to navigate to the favs", () => {
    cy.visit("http://localhost:3000/favs")
    cy.url().should("not.include", "/favs")
    cy.url().should("include", "/login")
  })
})
