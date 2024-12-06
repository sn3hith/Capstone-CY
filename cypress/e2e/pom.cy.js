// cypress/integration/home.cy.js

import { FirstC,SecondC,ThirdC,FourthC,FifthC } from '../Pom/pom';
// import { SecondC } from './../support/POM/SecondC';
// import { ThirdC } from './../support/POM/ThirdC';
// import { FourthC } from './../support/POM/FourthC';
// import { FifthC } from './../support/POM/FifthC';

describe('Apollo Pharmacy Homepage Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevents uncaught exceptions from failing the tests
    })
  it('should interact with various elements on the homepage', () => {
    // FirstC actions
    const ln = new FirstC();
    ln.visitHomePage();
    ln.clickConsultationImage();
    ln.clickSelectAddress();

    // SecondC actions
    const pr = new SecondC();
   // pr.clickPincode();
    //pr.typecode();
    //pr.submitPincode();
    pr.specialoffers();

    // ThirdC actions
    const ch = new ThirdC();
    ch.clickSearchBox();
    ch.clickCart();
    ch.clickgoto();

    // FourthC actions
    const tr = new FourthC();
    tr.clickBuyMedicines();
    tr.clickAllProducts();
    tr.clickBabyCare();

    // FifthC actions
    const tt = new FifthC();
    tt.clickNds();
    tt.clickWomenCare();
   // tt.clickPersonalcare();
  });
});
