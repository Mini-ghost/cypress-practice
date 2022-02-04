describe('content type', () => {
  it('content type', () => {
    cy.visit('https://svelte.dev/')
    cy.wait(3000)

    cy.document()
      .its('contentType')
      .should('eq', 'text/html')

    cy.document()
      .its('charset')
      .should('eq', 'UTF-8')

    cy.document()
      .its('title')
      .should('include', 'Svelte')
  })
});