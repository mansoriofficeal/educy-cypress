describe('Login via API', function() {
    it('Successfully login via API', function() {
      cy.loginViaAPI();
      cy.visit('*/#!/main');
  
      // Lakukan asserstion atau tindakan selanjutnya setelah berhasil login
      // Contoh:
      cy.get('.welcome-message').should('include.text', 'Welcome, User!');
      cy.get('.dashboard').should('be.visible');
    });
  });
  