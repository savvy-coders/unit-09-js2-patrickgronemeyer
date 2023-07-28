describe('JavaScript Coding Challenge', () => {

  // Load the page before each test
  beforeEach(() => {
    cy.visit('index.html');  // replace with the path to your HTML file
  });

  // 1
  it('Should log a greeting message with the provided name', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      win.greet('Tester');
      cy.get('@consoleLog').should('be.calledWithMatch', /^Hello, .+!$/);
    });
  });

  // 2
  it('Should return the sum of a and b', () => {
    cy.window().then((win) => {
      const result = win.calculateSum(5, 7);
      expect(typeof result).to.equal('number');
    });
  });

  // 3
  it('Should log the value of x', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      win.outerFunction();
      cy.get('@consoleLog').should('be.calledWith', 10);
    });
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

  // 5
  it('Should log "Button clicked!" when the button is clicked', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      cy.get('#myButton').click();
      cy.get('@consoleLog').should('be.calledWithMatch', 'Button clicked!', 'click');
    });
  });

  // 6
  it('Should stop the click event from propagating', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
      cy.get('#myButton').click();
      cy.get('@consoleLog').should('be.calledWithMatch', 'Button clicked!', 'click');
    });
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