/// <reference types= "cypress" />
import { faker } from '@faker-js/faker';
const number = Math.floor(Math.random() * 10);
const quantidade = Math.floor(Math.random() * 10);

function putProdutos(_id, Authorization) {
    return cy.api({
        method: 'PUT',
        url: `produtos/${_id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Authorization}`
        },
        failOnStatysCode: false,
        body: {
            "nome": `${faker.vehicle.vehicle()}`,
            "preco": 470,
            "descricao": `Alterando Produto test ${number}`,
            "quantidade": `${quantidade}`
        }
    })
}
export { putProdutos };