class Login {
    visit() {
      cy.visit('https://www.rememberthemilk.com/login/'); // Visit the login page
    }
  
    fillUsername(username) {
      cy.get('#username').type(username); // Modify selector based on your login page
    }
  
    fillPassword(password) {
      cy.get('#password').type(password); // Modify selector based on your login page
    }
  
    submit() {
      cy.get('#login-button').click(); // Modify the selector to match the login button
    }
  
    // Optional: Add success/error assertions
    assertLoginSuccess() {
      cy.url().should('include', 'https://www.rememberthemilk.com/app//dashboard');  // Modify based on the actual redirect after login
    }
  
    assertLoginErrorMessage() {
      cy.get('.error-message').should('be.visible'); // Modify selector based on your error message
    }
  }
  
  export default Login;
  