require("cypress-xpath");

describe("Regression Test for Apollo Pharmacy (Data-Driven from JSON)", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevents uncaught exceptions from failing the tests
    });

    it("Footer and Navigation Links (Data-Driven from JSON)", () => {
        // Load the data from the JSON fixture file
        cy.fixture('categories.json').then((data) => {
            // Visit the Apollo Pharmacy homepage
            cy.visit("https://www.apollopharmacy.in/");

            // Verify the logo is clickable and navigate to the homepage
            cy.get('.Header_logo__YLshq > .yh').should('be.visible').click();

            // Verify the first navigation link is present and clickable
            cy.get('.Header_active__NBhUN > a').should('be.visible').click();

            // Iterate through categories and click each link
            data.filter(item => item.link).forEach(category => {
                // Click on the category link
                cy.get(`[href='${category.link}']`).should('be.visible').click();

                // Verify the page URL includes the category link
                cy.url().should('include', category.link);
            });
            data.filter(item => item.product).forEach(product => {
            });
            // Verify the footer logo is visible and clickable
            cy.get('.Footer_footerLogo__isTPQ > a > .yh').click();

            // Verify that clicking the footer logo navigates to the homepage
            cy.url().should('eq', 'https://www.apollopharmacy.in/');
        });
    });
});
