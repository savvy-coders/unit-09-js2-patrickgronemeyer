describe('JavaScript Coding Challenge', () => {

  // Load the page before each test
  beforeEach(() => {
    cy.visit('index.html'); 
  });

  // 2
  it('Should return the sum of a and b', () => {
    cy.window().then((win) => {
      const result = win.calculateSum(5, 7);
      expect(typeof result).to.equal('number');
    });
  });
});