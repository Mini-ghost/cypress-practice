describe('scroll', () => {
  it('scroll', () => {
    cy.viewport('macbook-16')
    cy.visit('https://v3.nuxtjs.org/')
    cy.wait(5000)

    cy.get('#smooth-upgrade-to-nuxt-3').scrollIntoView()
    cy.wait(5000)
  })
});