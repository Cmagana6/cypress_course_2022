const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
  
module.exports = defineConfig({
  chromeWebSecurity:false,
  pageLoadTimeout:60000,
  defaultCommandTimeout:2000,
  e2e: {
    //specPattern: "**/*.feature",
    async setupNodeEvents(on, config){
      // implement node event listeners here
    const bundler = createBundler({
      plugins: [createEsbuildPlugin(config)],
    });
    on('file:preprocessor',bundler);
    await addCucumberPreprocessorPlugin(on,config);
    return config;
    },
  },
});
