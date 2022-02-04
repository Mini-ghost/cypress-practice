describe('Browser Action', () => {
  it('should load google website', () => {
    cy.visit('https://www.google.com.tw/', { timeout: 10000 })
  })

  it('should check current url', () => {
    cy.url().should('include', 'google')
  })

  it('should check image', () => {
    cy.get('img').should('be.visible')
  })
});