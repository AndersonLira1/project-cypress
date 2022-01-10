// describe define uma suite de testes
describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1440, 900) // Resolução da tela de teste
        cy.visit('https://buger-eats.vercel.app/') // Endereço do teste
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})