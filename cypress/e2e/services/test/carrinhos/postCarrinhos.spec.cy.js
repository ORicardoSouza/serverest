/// <reference types= "cypress" />
import * as login from "../../requests/login/post/login";
import * as postProduto from "../../requests/produtos/post.produtos";
import * as postCarrinho from "../../requests/carrinhos/post.carrinho";

describe('Vaçidando cadastro de produtos no Carrinho', () => {
    it('Validando cadsatro no carrinho', () => {
        login.createLogin().then((resLogin) => {
            const authorization = resLogin.body.authorization;
            cy.log(`${authorization}`)

            postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                cy.log(resPostProd.body)
                expect(resPostProd.body.message).to.eq("Cadastro realizado com sucesso");
                let _id = resPostProd.body._id

                postCarrinho.postCarrinhos(`${authorization}`, `${_id}`).then((resPostCarrinho) => {
                    cy.log(resPostCarrinho.body)
                })
            })
        })
    });
})
