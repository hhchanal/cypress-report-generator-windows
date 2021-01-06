// https://docs.cypress.io/api/introduction/api.html

describe('Link Test', () => {
  it('Access page and find the link', () => {
    cy.visit('/')
    cy.get('#nav > a').should('have.attr', 'herf', '#')
  })
})