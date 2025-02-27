import Login from '../PageObject/loginPage.js'; // Correct import path

describe('Login Page', () => {
  const LoginPage = new Login();

  beforeEach(() => {
    LoginPage.visit();  // Visit the login page before each test
    cy.fixture('loginData').then((data) => {
      // Log data to check if it's loaded correctly
      cy.log('Correct Username:', data.correctUsername);
      cy.log('Correct Password:', data.correctPassword);

      if (!data.correctUsername || !data.correctPassword) {
        throw new Error('Missing valid login credentials');
      }

      LoginPage.fillUsername(data.correctUsername);
      LoginPage.fillPassword(data.correctPassword);
      LoginPage.submit();

  });
});

    it("should use Excel data to perform login tests", () => {
        cy.readExcelFile("Tasklist.xlsx").then((data) => {
            data.shift(); // Remove headers if present
            data.forEach(([Tasklist]) => {
      
            cy.get('.b-bT-Sj-jX-lX').click().type(Tasklist).type('{Enter}');

      
              // Add assertions based on expected outcomes
              //cy.log("Verifying successful login");
              //cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
              
      });
    });
  });
});
