const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7vg3sf',
  chromeWebSecurity: false,
  videosFolder: "cypress/videos/testExecutionVideos",
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    "baseUrl": "http://www.webdriveruniversity.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },



  "env": {
    "webdriveruni_homepage": "http://www.webdriveruniversity.com",
    "first_name": "sarah"
  }

});
