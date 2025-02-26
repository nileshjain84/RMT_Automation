import Login from '../PageObject/loginPage.js'; // Correct import path

describe("Logout Test Case", () => {

    const LoginPage = new Login();

    beforeEach(() => {
      LoginPage.visit();  // Visit the login page before each test
      cy.viewport(1920, 1080);

    });
    it('delete a specific task', () => {
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
          cy.wait(4000)
          //LoginPage.assertLoginSuccess();  // Ensure to assert a successful login
          cy.get('.b-bT-Sj-jX-lX')
            .click()
            .type('Add a new task-1')
            .type('{Enter}');
          cy.get('.b-bT-Sj-jX-lX')
            .click()
            .type('Add a new task-2')
            .type('{Enter}');
          //cy.get('#\:29 > .b-ib-dS-AS-ES > .b-AS').type('{delete}');
          //cy.get('#\:1u > .m-n-o-mB-Uj').click()
          //<div class="m-JU-Xp m-n-o-mB-Uj" style="user-select: none;"><div class="m-JU-Xp m-n-o-FE-Uj" style="user-select: none;"></div></div>
        });
      });
});