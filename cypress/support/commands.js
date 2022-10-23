const faker = require('@faker-js/faker')
Cypress.Commands.add('generateFixtureUsuario', () => {
   
    cy.writeFile('cypress/e2e/services/payloads/usuarios/createUsuario.json',
        {
            'email': `${faker.name.firstName()}@email.com`,
            'nome': `${faker.name.firstName()} ${faker.name.lastName()}`,
            'password': `${faker.datatype.number()}`,
            'administrador': `true`
        })
})

Cypress.Commands.add('generateFixtureLogin', () => {
    cy.writeFile("cypress/e2e/services/payloads/login/createLogin.json",
        {
            'email': `${faker.name.firstName()}@email.com`,
            'password': `${faker.datatype.number()}`
        })
})