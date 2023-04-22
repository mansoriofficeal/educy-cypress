/// <reference types="cypress" />

describe('Saucedemo website', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('should be able to login with standard_user credentials', () => {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('should be able to add an item to the cart and checkout', () => {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html')
      cy.get('#shopping_cart_container').click()
      cy.get('.cart_list')
      cy.get('[data-test="checkout"]').click()
      cy.get('#checkout_info_container').should('be.visible')
      cy.get('#first-name').type('man')
      cy.get('#last-name').type('sori')
      cy.get('#postal-code').type('12345')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
    })
  })
  
  