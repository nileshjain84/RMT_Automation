// cypress/support/common.js
import 'cypress-xpath';

 
class Common {
    loginProcess() {
        cy.log("Starting Login Process");
 
        cy.log("Accepting cookies");
        //cy.get('#login-button').click(); // Handling cookies
 
        cy.log("Entering valid username and password");
        cy.get('#username').type(Cypress.env("username")).type('{Enter}');
        cy.get('#password').type(Cypress.env("password")).type('{Enter}');
  
        cy.wait(5000);
        cy.get('#login-button').click();
 
 
        cy.url().should('include', 'https://www.rememberthemilk.com/app//dashboard');
       // cy.url().should('include', '/login');  //assertion
        cy.wait(3000);
    }
}
 
export default Common; // Exporting an instance for direct uses