import * as login from "../../requests/login/post/login"
import * as postProduto from "../../requests/produtos/post.produtos";
import * as deleteProduto from "../../requests/produtos/delete.produtos";

describe('Validação de cadastro de produtos', () => {
    it('Deletar produto com sucesso', () => {
        login.createLogin().then((resLogin) => {
            let authorization = resLogin.body.authorization;
            expect(resLogin.status).to.eq(200)

            postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                expect(resPostProd.body.message).to.eq("Cadastro realizado com sucesso");
                let _id = resPostProd.body._id
                expect(resPostProd.status).to.eq(201)


                deleteProduto.deleteProdutos(_id, authorization).then((resdeleteProd) => {
                    expect(resdeleteProd.status).to.eq(200)
                    expect(resdeleteProd.body.message).to.eq("Registro excluído com sucesso")

                })

            })
        })
    });
    it.only('Deletar produto inexistente', () => {
        login.createLogin().then((resLogin) => {
            let authorization = resLogin.body.authorization;
            expect(resLogin.status).to.eq(200)

            deleteProduto.deleteProdutos("produto inexistente", authorization).then((resdeleteProd) => {
                expect(resdeleteProd.status).to.eq(200)
                expect(resdeleteProd.body.message).to.eq("Nenhum registro excluído");
            })
        })
    })
});