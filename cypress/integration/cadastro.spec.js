import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro', () => {
    ///  EXEMPLOS DE GANCHOS  ///

    // before(function() {
    //     cy.log('Tudo aqui roda antes de todos os casos de testes')
    // })

    // beforeEach(function() {
    //     cy.log('Tudo aqui roda sempre antes de cada caso de teste')
    // })

    // after(function() {
    //     cy.log('Tudo aqui roda uma única vez depois de cada caso de teste')
    // })

    // afterEach(function() {
    //     cy.log('Tudo aqui roda sempre depois de cada caso de teste')
    // })

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('Usuário deve se tornar um entregador', function() {
        let deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function() {
        let deliver = signupFactory.deliver()

        deliver.cpf = '000000141AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('email incorreto', function() {
        let deliver = signupFactory.deliver()

        deliver.email = 'andersonhotmail.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageBe()
        // signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('campos obrigatorios', function() {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg) {
            it(`${msg.field} campos obrigatorios`, function() {
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })
})