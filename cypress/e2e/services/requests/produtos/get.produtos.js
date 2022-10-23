/// <reference types= "cypress" />

function getprodutos() {
    return cy.api({
        method: 'GET',
        url: `produtos`,
        headers: { 'Content-Type': 'application/json' },
        failOnStatysCode: false,
    })
}
export { getprodutos };