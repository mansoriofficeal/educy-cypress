/// <reference types="cypress" />

describe('Working with inputs', () => {
  it('Visit the website', () => {
    cy.visit("http://zero.webappsecurity.com/login.html")
    cy.url().should("include", "login.html")
  });
  it('Should fill username', () => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
  });
  it('Should fill password', () => {
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('password')
  });

// Test
it('should check the checkbox', () => {
  cy.get('#user_remember_me').check().should('be.checked')
});

it('should uncheck the checkbox', () => {
  cy.get('#user_remember_me').uncheck().should('not.be.checked')
});

  it('should toggle the checkbox', () => {
    cy.get('#user_remember_me').click().should('be.checked')
    cy.get('#user_remember_me').click().should('not.be.checked')
  });
});
