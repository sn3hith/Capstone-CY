describe('API Tests', () => {
    beforeEach(() => {
      // Disable uncaught exception handling for Cypress
      Cypress.on('uncaught:exception', () => {
        return false;
      });
    });
 
    it('API GET Request', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/2',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('first_name', 'Janet');
        cy.log(JSON.stringify(response.body));
      });
    });
 
    it('API POST Request', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'Jai',
          job: 'CEO',
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'Jai');
        expect(response.body).to.have.property('job', 'CEO');
        cy.log(JSON.stringify(response.body));
      });
    });
 
    it('API PUT Request', () => {
      cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body: {
          name: 'Jaii',
          job: 'Entrepreneur',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Jaii');
        expect(response.body).to.have.property('job', 'Entrepreneur');
        cy.log(JSON.stringify(response.body));
      });
    });
 
    it('API DELETE Request', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2',
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });
 
 