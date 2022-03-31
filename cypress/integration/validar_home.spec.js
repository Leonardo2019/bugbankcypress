/// <reference types="cypress" />

describe('Automation Bug Bank', () => {
    beforeEach(() => {
        cy.visit("https://bugbank.netlify.app/")
    })
    // beforeEach(() => {
    //     cy.reload()
    // })

    it("Acessar Bug Bank e validar Title", () => {
        cy.title().should("be.equal", "BugBank | O banco com bugs e falhas do seu jeito")
    })
})