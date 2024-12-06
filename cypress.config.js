const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
//const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 90_000,
  e2e: {
    //specPattern:"**/*.feature",
    defaultCommandTimeout: 20000,
    watchForFileChanges:false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureCypress(on,config)
      //on('file:preprocessor', cucumber())
      //return config;
    },
     
  },
});