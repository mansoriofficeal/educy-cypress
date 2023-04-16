/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visit the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
      cy.get('h1')
      cy.contains('get').click()
      cy.url().should('include', '/commands/querying')
    });
});