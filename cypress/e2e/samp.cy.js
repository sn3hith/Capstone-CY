require("cypress-xpath")
 
describe("Xpath", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevents uncaught exceptions from failing the tests
    });
})
it("Footer", () => {
    cy.visit("https://www.apollopharmacy.in/")
})
