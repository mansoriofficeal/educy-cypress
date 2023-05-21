describe('Create New User', () => {
    it('Successfully create new user', () => {
        var user = {
            "name": "Mansori",
            "job": "QA"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user)
            .then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.name).to.equal(user.name);
                expect(response.body.job).to.equal(user.job);
            });
    });
});
