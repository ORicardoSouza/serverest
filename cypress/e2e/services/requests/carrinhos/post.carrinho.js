/// <reference types= "cypress" />

function postCarrinhos(Authorization, _id) {
    return cy.api({
        method: 'POST',
        url: `carrinhos`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Authorization}`
        },
        body: {
            "produtos": [
                {
                    "idProduto": `${_id}`,
                    "quantidade": 1
                }
            ]
        },
        failOnStatysCode: false,
    })
}
export { postCarrinhos };