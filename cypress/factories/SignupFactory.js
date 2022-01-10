// let faker = require('faker')
let cpf = require('gerador-validador-cpf')

export default {
    
    deliver: function() {
        // let firstName = faker.name.firstName()
        // let lastName = faker.name.lastName()

        let data = {
            name: "anderson",
            cpf: cpf.generate(),
            email: "anderson@hotmail.com",
            whatsapp: "11999999999",
            address: {
                postalcode: "55291661",
                street: "Rua Manoel de Aquino Vasconcelos",
                number: "44",
                details: "ap 152",
                district: "Francisco Simão dos Santos Figueira",
                city_state: "Garanhuns/PE"
            },
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"
        }
        return data
    }
}