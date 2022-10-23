/// <reference types= "cypress" />
const payloadCreateLogin = { "email": "fulano@qa.com", "password": "teste" }
const payloadCreateLoginError = { "email": "od@email.com", "password": "10440" }

function createLogin() {
    return cy.api({
        method: 'POST',
        url: '/login',
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        retryOnStatusCodeFailure: false,
        body: payloadCreateLogin
    })
}
export { createLogin };

function createLoginError() {
    return cy.api({
        failOnStatusCode: false,
        method: 'POST',
        url: '/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: payloadCreateLoginError
    })
}
export { createLoginError };