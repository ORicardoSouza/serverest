/// <reference types= "cypress" />

function getCarrinho(_id,Authorization) {
    return cy.api({
        method: 'GET',
        url: `carrinhos/${_id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Authorization}`
        },
        failOnStatysCode: false,
    })
}
export { getCarrinho };