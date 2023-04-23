/// <reference types="cypress" />

describe('Pay Bills Page', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html');
    });
        it('should enter payment details and validate payment description', () => {
          cy.makePayment('Electric Company', '12345', '100', '2023-05-01');

          cy.get('#pay_saved_payees').click();
  
          cy.get('#alert_content')
            .should('contain.text', 'The payment was successfully submitted.');
        });
      });
      
  

   