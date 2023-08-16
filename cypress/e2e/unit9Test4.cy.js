describe('JavaScript Coding Challenge', () => {

  // Load the page before each test
  beforeEach(() => {
    cy.visit('index.html');  
  });
  // 4
  it('Should return a function that logs the value of x', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      const closure = win.outerFunctionTwo();
      closure();
      cy.get('@consoleLog').should('be.calledWith', 10);
    });
  });
});
