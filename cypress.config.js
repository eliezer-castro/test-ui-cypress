const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n46gfd',
  e2e: {
    setupNodeEvents(on, config) {
 
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/'
  },
});
