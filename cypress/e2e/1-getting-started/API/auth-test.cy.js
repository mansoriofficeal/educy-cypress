describe('Basic Auth', function() {
    it('Successfully login by appending username and password URL', function() {
        cy.visit({
            url: 'https://the-internet.herokuapp.com/basic_auth',
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.');
        });
        it('Successfully login using headers', () => {
            cy.visit('https://the-internet.herokuapp.com/basic_auth', {
                headers: {
                   authorization: 'Basic YWRtaW46YWRtaW4=' 
                },
                failOnStatusCode: false
            })
            cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.');
        })
});
