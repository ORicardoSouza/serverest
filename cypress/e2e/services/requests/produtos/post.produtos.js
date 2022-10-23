/// <reference types= "cypress" />
import { faker } from '@faker-js/faker';
const number = 1 + Math.floor(Math.random() * 10);
const quantidade = 1 + Math.floor(Math.random() * 10);
const nomeProduto = `${faker.name.firstName()}`
//const createUsuario = require('/home/ricardosouza/Área de Trabalho/Projetos/serverest/cypress/e2e/services/payloads/usuarios/createUsuario.json')

function postProduto(authorization) {
    return cy.api({
        method: 'POST',
        url: 'produtos',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization': `${authorization}`
        },
        body: {
            'nome': nomeProduto,
            'preco': 300,
            'descricao': `Produto teste ${number}`,
            'quantidade': quantidade
        }
    })
}
export { postProduto };

function postProdutoError(authorization) {
    return cy.api({
        method: 'POST',
        url: 'produtos',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization': `${authorization}`
        },
        body: {
            'nome': nomeProduto,
            'preco': 300,
            'descricao': `Produto teste ${number}`,
            'quantidade': quantidade
        }
    })
}
export { postProdutoError };