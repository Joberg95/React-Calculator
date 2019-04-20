/// <reference types="Cypress" />

describe("Display a calculator", () => {
	it("when user visits the page", () => {
    cy.visit("http://localhost:3000")
    cy.get("button[name=CE]").click();
    cy.get("button[name=1]").click();
    cy.get("button[name=2]").click();
    cy.get("button[name='*']").click();
    cy.get("button[name=3]").click();
    cy.get("button[name='=']").click()
    cy.get('p').should("contain", "36")
    })
})
