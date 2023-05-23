describe('Validate Header', () => {
    it('Successfully validate content-type and response body', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
      cy.get('@pokemon')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8');
  
      cy.get('@pokemon').its('body').should('not.be.empty');
  
      cy.get('@pokemon').its('body').then((responseBody) => {
        expect(responseBody.name).to.equal('ditto');
        expect(responseBody).to.have.property('abilities');
        expect(responseBody).to.have.property('sprites');
      });
    });
  });  