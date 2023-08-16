describe('JavaScript Coding Challenge', () => {

  // Load the page before each test
  beforeEach(() => {
    cy.visit('index.html');  // replace with the path to your HTML file
  });
  // 7
  it('Should create a new element and attach a mouseover event listener', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      win.createNewElement();
      cy.get('.myClass').last().trigger('mouseover');
      cy.get('@consoleLog').should('be.calledWith', 'Mouse over new element!');
    });
  });
});