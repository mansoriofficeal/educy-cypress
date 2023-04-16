const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // https://docs.cypress.io/guides/references/configuration#e2e
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    testIsolation: false 
  },
});
