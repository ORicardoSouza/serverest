/// <reference types= "cypress" />

function getUsuario(_id) {
    return cy.api({
        method: 'GET',
        url: `usuarios/${_id}`,
        headers: { 'Content-Type': 'application/json' },
    })
}
export { getUsuario };

function getUsuarioError(_id) {
    return cy.api({
        failOnStatusCode: false,
        method: 'GET',
        url: `usuarios/${_id}`,
        headers: { 'Content-Type': 'application/json' },
        failOnStatysCode: false,
    })
}
export { getUsuarioError };