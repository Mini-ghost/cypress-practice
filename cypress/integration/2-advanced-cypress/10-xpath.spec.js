describe('xpath', () => {
  before(() => {
    cy.viewport('macbook-13')
    cy.visit('https://v3.nuxtjs.org/')
  })

  it('xpath', () => {
    cy.xpath('//*[@id="__layout"]/div/div/div/div/div[1]/div/section/h1/span')
      .should('contain', 'Vue')
  })

  it('xpath link click', () => {
    cy.xpath('//*[@id="__layout"]/div/div/div/div/div[1]/div/section/div[2]/a[2]')
      .click()
  })

  it('check title', () => {
    cy.xpath('//*[@id="introduction"]')
      .should('contain.text', 'Introduction')
  })
});
