// cypress/support/POM/FirstC.js
export class FirstC {
    visitHomePage() {
      cy.visit('https://www.apollopharmacy.in/');
    }
  
    clickConsultationImage() {
      cy.get('.Header_logo__YLshq > .yh').click();
    }
  
    clickSelectAddress() {
      cy.get('p:contains("Select Address")').click();
    }
  }
  // cypress/support/POM/SecondC.js
export class SecondC {  
    specialoffers() {
      cy.get('a[aria-label="Offers"]').click();
    }
  }
// cypress/support/POM/ThirdC.js
export class ThirdC {
    clickSearchBox() {
      cy.get('div.SearchPlaceholder_searchRoot__LWDXI').click();
    }
  
    clickCart() {
      cy.get('a[aria-label="Cart Icon"]').click();
    }
  
    clickgoto() {
      cy.get('a:contains("GO TO PHARMACY")').click();
    }
  }
// cypress/support/POM/FourthC.js
export class FourthC {
    clickBuyMedicines() {
      cy.get('a:contains("Buy Medicines")').click();
    }
  
    clickAllProducts() {
      cy.get('a:contains("Apollo Products")').click();
    }
  
    clickBabyCare() {
      cy.get('a[href="/shop-by-category/baby-care"]').click();
    }
  }
// cypress/support/POM/FifthC.js
export class FifthC {
    clickNds() {
      cy.get('a:contains("Nutritional Drinks & Supplements")').click();
    }
  
    clickWomenCare() {
      cy.get('a:contains("Women Care")').click();
    }
  
    // clickPersonalcare() {
    //   cy.get('a:contains("Personal Care")').click();
    // }
  }
        