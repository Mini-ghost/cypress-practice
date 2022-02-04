describe('Screenshots test', () => {
  it('screenshot', () => {
    cy.viewport('macbook-13')
    cy.visit('https://www.coldstone.com.tw/')
    cy.screenshot({ capture: 'fullPage' })

    cy.screenshot({ capture: 'runner' })
    cy.screenshot({ capture: 'viewport' })
  })

  it('element', () => {
    cy.viewport('macbook-13')
    cy.get('.banner-section').screenshot()
  })
});