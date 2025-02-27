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

    it("should log out successfully", () => {

        const com = new Common();
        com.loginProecss();
       
        //cy.get('.power > img').click();
        //cy.xpath("//button[normalize-space()='Yes']").should('be.visible').click(); //assertion
        //cy.wait(4000)

        // Assert that the user is redirected to the login page after logout
        cy.url().should('include', '/login');
        
    });
});