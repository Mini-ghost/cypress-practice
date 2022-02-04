describe('select', () => {
  before(() => {
    cy.viewport('macbook-13')
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/API/document')
  })

  it('select', () => {
    cy.get('#language-selector').scrollIntoView()
    cy.wait(5000)
    cy.get('#language-selector').select('zh-TW')
    cy.get('#language-selector').should('have.value', 'zh-TW')
  })
});