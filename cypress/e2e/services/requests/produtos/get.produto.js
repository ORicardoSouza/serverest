/// <reference types= "cypress" />

function getProduto(_id) {
    return cy.api({
        method: 'GET',
        url: `produtos/${_id}`,
        headers: { 'Content-Type': 'application/json' },
    })
}
export { getProduto };


function getProdutoError(_id) {
    return cy.api({
        failOnStatusCode: false,
        method: 'GET',
        url: `produtos/${_id}`,
        headers: { 'Content-Type': 'application/json' },
    })
}
export { getProdutoError };