describe('Deleted user', () => {
    it('Successfully deleted user', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.equal(204);
         });
    });
});