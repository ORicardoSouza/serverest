/// <reference types= "cypress" />
import * as login from "../../requests/login/post/login";
import * as postProduto from "../../requests/produtos/post.produtos";
import * as postCarrinho from "../../requests/carrinhos/post.carrinho";
import * as getCarrinhos from "../../requests/carrinhos/get.carrinhos";
import * as deleteCarrinhoCancelar from "../../requests/carrinhos/delete.carrinho.cancelar";
//import * as deleteCarrinhoConcluir from "../../requests/carrinhos/delete.carrinho.concluir";
describe('Validando cadastro de produtos no Carrinho', () => {
    it('Validando cadsatro no carrinho', () => {
        login.createLogin().then((resLogin) => {
            const authorization = resLogin.body.authorization;
            expect(resLogin.status).to.equal(200)
            
            if (resLogin.status == (200)) {
                cy.log("Seu login foi registrado com sucesso")
                expect(resLogin.body.message).to.eq("Login realizado com sucesso")
                getCarrinhos.getCarrinhos(`${authorization}`).then((resGetCarrinho) => {
                })

                deleteCarrinhoCancelar.deleteCarrinhosCancelar(`${authorization}`).then((resDeleteCarrinhoCancelar) => {
                    expect(resDeleteCarrinhoCancelar.body.message).to.eq("Não foi encontrado carrinho para esse usuário")

                    postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                        let _id = resPostProd.body._id
                        expect(resPostProd.body.message,).to.eq("Cadastro realizado com sucesso");

                        postCarrinho.postCarrinhos(`${authorization}`, `${_id}`).then((resPostCarrinho) => {
                            expect(resPostCarrinho.body.message, `Sucesso no cadastro`).to.eq("Cadastro realizado com sucesso")
                        })
                        deleteCarrinhoCancelar.deleteCarrinhosCancelar(`${authorization}`).then((resDeleteCarrinhoCancelar) => {
                            expect(resDeleteCarrinhoCancelar.body.message, 'Conluir compra').to.eq('Registro excluído com sucesso. Estoque dos produtos reabastecido')
                        })

                    })
                })
            } else if (
                resLogin.body.message == "Email e/ou senha inválidos") {
                cy.log("Ocorreu um erro no seu Login")
            }
        })
    })
})