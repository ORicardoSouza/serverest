/// <reference types= "cypress" />

function deleteCarrinhosCancelar(Authorization) {
    return cy.api({
        method: 'DELETE',
        url: `carrinhos/cancelar-compra`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Authorization}`
        },
        failOnStatysCode: false,
    })
}
export { deleteCarrinhosCancelar };