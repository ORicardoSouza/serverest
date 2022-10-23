import * as login from "../../requests/login/post/login"
import * as postProduto from "../../requests/produtos/post.produtos";
import * as getProduto from "../../requests/produtos/get.produto";

describe('Validação busca de produtos', () => {
    it('Buscanco produtos pela ID com sucesso', () => {
        login.createLogin().then((resLogin) => {
            const authorization = resLogin.body.authorization;
            expect(resLogin.status).to.eq(200)
            postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                expect(resPostProd.body.message).to.eq("Cadastro realizado com sucesso");
                let _id = resPostProd.body._id
                expect(resPostProd.status).to.eq(201)
                getProduto.getProduto(_id).then((resGetProd) => {
                    expect(resGetProd.status).to.eq(200)
                    expect(resGetProd.body._id).to.eq(`${_id}`)
                })

            })
        })
    });
    it('Busca por produto inexistente pela ID', () => {
        login.createLogin().then((resLogin) => {
            const authorization = resLogin.body.authorization;
            expect(resLogin.status).to.eq(200)
                let _id = "produtoInexistente"
                getProduto.getProdutoError(_id).then((resGetProd) => {
                    expect(resGetProd.status).to.eq(400)
                    expect(resGetProd.body.message).to.eq(`Produto não encontrado`)
                })
            })
        })
    });