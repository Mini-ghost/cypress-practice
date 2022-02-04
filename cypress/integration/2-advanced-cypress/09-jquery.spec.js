describe('jquery', () => {
  before(() => {
    cy.viewport('macbook-13')
    cy.visit('https://www.netflix.com/tw/login')
  })

  after(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('jquery', () => {
    const login = Cypress.$('[data-uia="login-submit-button"]')
    login.click()
  })
});