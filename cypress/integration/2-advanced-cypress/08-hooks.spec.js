describe('hooks', () => {
  before(() => {
    cy.viewport('iphone-se2')
  })

  beforeEach(() => {
    cy.visit('https://www.netflix.com/tw/login')
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('login netflix', () => {
    cy.fixture('netflix').then(res => {
      const username = res.username
      const password = res.password

      cy.get('#id_userLoginId').focus().type(username, { delay: 100 })
      cy.get('#id_password').focus().type(password, { delay: 100 })
      cy.get('[data-uia="login-submit-button"]').click()
      cy.wait(5000)
    })
  })

  it('netflix', () => {
    cy.fixture('netflix').then(res => {
      const username = '222'
      const password = '333'

      cy.get('#id_userLoginId').focus().type(username, { delay: 100 })
      cy.get('#id_password').focus().type(password, { delay: 100 })
      cy.get('[data-uia="login-submit-button"]').click()
      cy.wait(5000)
    })
  })
});