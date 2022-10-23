/// <reference types= "cypress" />

function deleteCarrinhosConcluir(Authorization) {
    return cy.api({
        method: 'DELETE',
        url: `carrinhos/concluir-compra`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Authorization}`
        },
        failOnStatysCode: false,
    })
}
export { deleteCarrinhosConcluir };