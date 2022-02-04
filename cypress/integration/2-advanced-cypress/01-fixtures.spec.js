describe('fixtures', () => {
  it('fixtures', () => {
    cy.visit('https://www.google.com.tw/', { timeout: 10000 })
    cy.wait(3000)

    cy.fixture('search').then(res => {
      const keyword = res.keyword

      cy.get('[name="q"]')
        .type(keyword, { wait: 1000 })
        .type('{enter}')
    })
  })
});