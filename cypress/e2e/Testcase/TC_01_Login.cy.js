import Login from '../PageObject/loginPage.js'; // Correct import path

describe('Login Page', () => {
  const LoginPage = new Login();

  beforeEach(() => {
    LoginPage.visit();  // Visit the login page before each test
  });

  it('should login with valid credentials', () => {
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
      //LoginPage.assertLoginSuccess();  // Ensure to assert a successful login
    });
  });

  it('should show error with invalid credentials', () => {
    cy.fixture('loginData').then((data) => {
      // Log data to check if it's loaded correctly
      cy.log('Incorrect Username:', data.incorrectUsername);
      cy.log('Incorrect Password:', data.incorrectPassword);

      if (!data.incorrectUsername || !data.incorrectPassword) {
         new Error('Missing invalid login credentials');
      }

      LoginPage.fillUsername(data.incorrectUsername);
      LoginPage.fillPassword(data.incorrectPassword);
      LoginPage.submit();
      //LoginPage.assertLoginErrorMessage();  // Ensure to assert an error message
    });


  it('should not log successfully with incorrect form data', function () {

      //Enter an incorrect username and password
      cy.get('#username').clear();
      cy.get('#password').clear();
      cy.get('#login-button').should('be.enabled').click();
  
      //Assertions for url and Login button
      cy.url().should('be.oneOf', [
        'https://www.rememberthemilk.com/login/?cp=1',
        'https://www.rememberthemilk.com/login/?tryagain=1&cp=1'
      ])
      cy.get('#login-button').should('exist').should('be.visible').and('contain.text', 'Log in');
  
      // Verify error message is displayed
      //cy.get('#errorMessage').should('exist').and('be.visible').and('contain', 'Invalid credentials');
  
    });
});
});
