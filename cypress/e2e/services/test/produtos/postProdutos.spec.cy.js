import * as login from "../../requests/login/post/login"
import * as postProduto from "../../requests/produtos/post.produtos.js";

describe('Validação de cadastro de produtos', () => {
    it('Cadastro com sucesso', () => {
        login.createLogin().then((resLogin) => {
            const authorization = resLogin.body.authorization;
            cy.log(`${authorization}`)
            postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                cy.log(resPostProd.body)
                expect(resPostProd.body.message).to.eq("Cadastro realizado com sucesso");

            })
        })
    });

    it.only('Já existe produto com esse nome', () => {
        login.createLogin().then((resLogin) => {
            const authorization = resLogin.body.authorization;
            cy.log(`${authorization}`)
            postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                cy.log(resPostProd.body)
                expect(resPostProd.body.message).to.eq("Cadastro realizado com sucesso");
                postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                    cy.log(resPostProd.body)
                    expect(resPostProd.body.message).to.eq("Cadastro realizado com sucesso");

                })
            })
        })
    });
});