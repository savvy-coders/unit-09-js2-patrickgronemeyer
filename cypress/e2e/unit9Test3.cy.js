describe('JavaScript Coding Challenge', () => {

  // Load the page before each test
  beforeEach(() => {
    cy.visit('index.html'); 
  });

  // 3
  it('Should log the value of x', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      win.outerFunction();
      cy.get('@consoleLog').should('be.calledWith', 10);
    });
  });
});