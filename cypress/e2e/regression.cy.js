require("cypress-xpath")

describe("Regression Test for Apollo Pharmacy", () => {
    // Catch uncaught exceptions to prevent the tests from failing due to them
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevents uncaught exceptions from failing the tests
    });

    it("Footer and Navigation Links", () => {
        // Visit the Apollo Pharmacy homepage
        cy.visit("https://www.apollopharmacy.in/")
        
        // Verify the logo is clickable and navigate to the homepage
        cy.get('.Header_logo__YLshq > .yh').should('be.visible').click()
        
        // Verify the first navigation link is present and clickable
        cy.get('.Header_active__NBhUN > a').should('be.visible').click()
        
        // Verify the Apollo Products category link is present and clickable
        cy.get('[href="/shop-by-category/apollo-products"]').should('be.visible').click()
        
        // Verify that clicking the link navigates to the correct page
        cy.url().should('include', '/shop-by-category/apollo-products')
        
        // Click again on the Apollo Products link and verify that the page doesn't reload or navigate unexpectedly
        //cy.get('[href="/shop-by-category/apollo-products"]').should('be.visible').click()
        
        // Verify Nutritional Drinks and Supplements category link is clickable
        cy.get('[href="/shop-by-category/nutritional-drinks-supplements"]').should('be.visible').click()
        
        // Verify Women Care category link is clickable
        cy.get('[href="/shop-by-category/women-care"]').should('be.visible').click()
        
        // Check if the first product in the list is visible and clickable
      //  cy.get(':nth-child(1) > .u').should('be.visible').click()
        
        // Check if the second product in the list is visible and clickable
        cy.get(':nth-child(2) > .u > .A > div').should('be.visible').click()
        
        // Check if the third product in the list is visible and clickable
        cy.get(':nth-child(3) > .u > .A > div').should('be.visible').click()
        
        // Click the third product again to test for consistency
        cy.get(':nth-child(3) > .u > .A > div').should('be.visible').click()
        
        // Click the third product again to ensure proper interaction
        cy.get(':nth-child(3) > .u > .A > div').should('be.visible').click()
        
        // Verify the footer logo is visible and clickable
        cy.get('.Footer_footerLogo__isTPQ > a > .yh').click()
        
        // Verify that clicking the footer logo navigates to the homepage
        cy.url().should('eq', 'https://www.apollopharmacy.in/')
    });
});
