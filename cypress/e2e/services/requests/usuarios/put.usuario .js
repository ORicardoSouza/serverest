/// <reference types= "cypress" />
import { faker } from '@faker-js/faker';

//const createUsuario = require('/home/ricardosouza/Área de Trabalho/Projetos/serverest/cypress/e2e/services/payloads/usuarios/createUsuario.json')

function putUsuario(_id) {
    return cy.api({
        method: 'PUT',
        url: `usuarios/${_id}`,
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        failOnStatysCode: false,
        body: {
            'email': `${faker.name.firstName()}@email.com`,
            'nome': `${faker.name.firstName()} ${faker.name.lastName()}`,
            'password': `${faker.datatype.number()}`,
            'administrador': `true`
        }
    })
}
export { putUsuario };