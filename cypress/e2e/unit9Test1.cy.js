describe('JavaScript Coding Challenge', () => {

  // Load the page before each test
  beforeEach(() => {
    cy.visit('index.html');  
  });

  // 1
  it('Should log a greeting message with the provided name', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      win.greet('Tester');
      cy.get('@consoleLog').should('be.calledWithMatch', /^Hello, .+!$/);
    });
  });
});