const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n46gfd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
