/// <reference types= "cypress" />

function deleteProdutos(_id, Authorization) {
    return cy.api({
        method: 'DELETE',
        url: `produtos/${_id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Authorization}`
        },
        failOnStatysCode: false,
    })
}
export { deleteProdutos };