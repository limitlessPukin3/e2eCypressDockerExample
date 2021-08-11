describe("Todo dashboard", () => {

  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Add item in to-do list', () => {
    cy.get("[type='text']")
      .type('I REALLY need some COFFEE')
    cy.get("[type= 'submit']").click()

    cy.contains("I REALLY need some COFFEE").should("be.visible")
  })
})