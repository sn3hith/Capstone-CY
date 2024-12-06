require("cypress-xpath")
 
describe("Xpath", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevents uncaught exceptions from failing the tests
    });
})
it("Footer", () => {
    cy.visit("https://www.apollopharmacy.in/")
    cy.get('.Header_logo__YLshq > .yh').click()
    cy.get('.Header_active__NBhUN > a').click()
    cy.get('[href="/shop-by-category/apollo-products"]').click()
    cy.get('[href="/shop-by-category/apollo-products"]').click()
    cy.get('[href="/shop-by-category/nutritional-drinks-supplements"]').click()
    cy.get('[href="/shop-by-category/women-care"]').click()
    cy.get(':nth-child(1) > .u').click()
    cy.get(':nth-child(2) > .u > .A > div').click()
    cy.get(':nth-child(3) > .u > .A > div').click()
    cy.get(':nth-child(3) > .u > .A > div').click()
  //  cy.get(':nth-child(3) > .u > .A > div').click()
    cy.get('.Footer_footerLogo__isTPQ > a > .yh').click()


})

