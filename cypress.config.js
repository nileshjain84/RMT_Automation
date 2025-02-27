const fs = require('fs');
const path = require('path');
//const XLSX = require('node-xlsx');
const { defineConfig } = require("cypress");
const xlsx = require('xlsx');

module.exports = defineConfig({
  e2e: {
    // Define the base URL for your tests
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Enable screenshots on test failure
    pageLoadTimeout: 120000, // Set timeout to 2 minutes
    "env": {
        "loginUrl": "https://www.rememberthemilk.com/login/",
        "dashboardUrl": "https://yourwebsite.com/dashboard",
        "signupUrl": "https://www.rememberthemilk.com/signup/"
        
    },
  
    env: {
      username: "jainnil",
      password: "Prisha@2024",
    },
    
    setupNodeEvents(on, config) {
     
      on("task", {
        readExcelFile({ filePath }) {
            const fullPath = path.join(__dirname, "./cypress/fixtures", filePath);
  
            if (!fs.existsSync(fullPath)) {
                throw new Error(`File not found: ${fullPath}`);
            }
  
            // Read the Excel file
            const workbook = xlsx.readFile(fullPath);
            const sheetName = workbook.SheetNames[0]; // Get the first sheet
            const sheet = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
  
            return sheet; // Return Excel data as 
          }
        })
        return config;
      }
    },

    // Enable and configure the Mochawesome reporter
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory to save reports
      overwrite: false, // Do not overwrite existing reports
      html: true, // Generate an HTML report
      json: true, // Generate a JSON report
      charts: true, // Include charts in the report
    },

    // Specify the file patterns for test specs
    //specPattern: 'cypress/integration/**/*.{cy.js,cy.ts}',
    
    // Other configuration options
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // Add any plugins or custom event handlers here
      return config;
    },
  },
);
