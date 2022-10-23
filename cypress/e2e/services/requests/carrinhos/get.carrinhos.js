/// <reference types= "cypress" />

function getCarrinhos(Authorization) {
    return cy.api({
        method: 'GET',
        url: `carrinhos`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Authorization}`
        },
        failOnStatysCode: false,
    })
}
export { getCarrinhos };