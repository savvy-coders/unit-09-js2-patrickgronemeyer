describe('JavaScript Coding Challenge', () => {

  // Load the page before each test
  beforeEach(() => {
    cy.visit('index.html');  
  });

  // 6
  it('Should stop the click event from propagating', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      cy.get('#myButton').click();
      cy.get('@consoleLog').should('be.calledWithMatch', 'Button clicked!', 'click');
    });
  });
});