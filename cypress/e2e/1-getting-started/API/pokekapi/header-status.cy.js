/// <reference types="cypress" />

describe('Automation API with pokeapi', () => {
    it('validate content-type', () => { 
      cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
      cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });
  
    it('Successfully validate status code', () => { 
      cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
      cy.get('@ditto').its('status').should('equal', 200)
    });
  
    it('Successfully validate status code with params', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users',
        qs: {
          page: 2,
          per_pages: 2,
          delay: 6
        }
      }).as('users')
      cy.get('@users').its('status').should('equal', 200)
    });
    it('Successfully validate content', () => { 
      cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
      cy.get('@bulbasaur').its('body').should('include', {name: 'bulbasaur'})
    });
    const body = {
      "abilities": {},
      "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
      }
    };
    
    // Melakukan validasi menggunakan expect
    expect(body.ability.name).to.eq("limber");
 });
 
    it('Successfully validate negative response', () => {
      cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
        failOnStatusCode: false
      }).as('eduwork')
      cy.get('@eduwork').its('status').should('equal', 404)
    });