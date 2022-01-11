// describe define uma suite de testes
describe('home page', () => {
    it('app deve estar online', () => {
        cy.visit('/') // Endereço do teste
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})