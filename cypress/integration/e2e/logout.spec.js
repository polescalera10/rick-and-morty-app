describe("Login and logout", () => {
  it("should log out", () => {
    cy.contains("Log Out").click()
    cy.url().should("include", "/login")
  })
})
