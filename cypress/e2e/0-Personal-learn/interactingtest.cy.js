/// <reference types="cypress" />

describe('Browser action', () => {
  it('Should load books website', () => {
    cy.visit("https://books.toscrape.com/index.html").wait(7000);
    cy.url().should("include", "index.html")
  })
})
