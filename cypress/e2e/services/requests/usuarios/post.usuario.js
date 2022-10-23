/// <reference types= "cypress" />
import * as createUsuario from "../../payloads/usuarios/createUsuario"
//const payloadUsuario = require('cypress/e2e/services/payloads/usuarios/createUsuario.json')
import { faker } from "@faker-js/faker";
const payload =
{
    email: `${faker.name.firstName()}@email.com`,
    nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
    password: `${faker.datatype.number()}`,
    administrador: `true`
}
function postUsuario() {

    return cy.api({
        method: 'POST',
        url: 'usuarios',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: payload
    })

}
export { postUsuario };