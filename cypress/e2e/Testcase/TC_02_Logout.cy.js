import Login from '../PageObject/loginPage.js'; 
import 'cypress-xpath';
import Common from "../support/Common"; 


describe("Logout Test Case", () => {

    const LoginPage = new Login();

    beforeEach(() => {
      LoginPage.visit();  // Visit the login page before each test
      cy.viewport(1920, 1080);

    });

    it("should log out successfully", () => {

        const com = new Common();
        com.loginProecss();
       
        //cy.get('.power > img').click();
        //cy.xpath("//button[normalize-space()='Yes']").should('be.visible').click(); //assertion
        //cy.wait(4000)

        // Assert that the user is redirected to the login page after logout
        cy.url().should('include', '/login').type('{Enter}');
    });
});