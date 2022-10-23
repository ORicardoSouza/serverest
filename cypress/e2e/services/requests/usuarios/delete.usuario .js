/// <reference types= "cypress" />

function deleteUsuario(_id) {
    return cy.api({
        method: 'DELETE',
        url: `usuarios/${_id}`,
        headers: { 'Content-Type': 'application/json' },
        failOnStatysCode: false,
    })
}
export { deleteUsuario };

function deleteUsuarioError(_id) {
    return cy.api({
        failOnStatusCode: false,
        method: 'DELETE',
        url: `usuarios/${_id}`,
        headers: { 'Content-Type': 'application/json' },
        failOnStatysCode: false,
    })
}
export { deleteUsuarioError };