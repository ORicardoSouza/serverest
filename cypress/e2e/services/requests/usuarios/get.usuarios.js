/// <reference types= "cypress" />

function getUsuarios() {
    return cy.api({
        method: 'GET',
        url: 'usuarios',
        headers: {'Content-Type': 'application/json'},
        failOnStatysCode: false,
    })
}
export { getUsuarios };