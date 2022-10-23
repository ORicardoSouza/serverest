import * as login from "../../requests/login/post/login"
import * as postProduto from "../../requests/produtos/post.produtos";
import * as putProduto from "../../requests/produtos/put.produtos";

describe('Validação de cadastro de produtos', () => {
    it.only('', () => {
        login.createLogin().then((resLogin) => {
            let authorization = resLogin.body.authorization;
            expect(resLogin.status).to.eq(200)

            postProduto.postProduto(`${authorization}`).then((resPostProd) => {
                expect(resPostProd.body.message).to.eq("Cadastro realizado com sucesso");
                let _id = resPostProd.body._id
                expect(resPostProd.status).to.eq(201)


                putProduto.putProdutos(_id, authorization).then((resPutProd) => {
                    expect(resPutProd.status).to.eq(200)
                    expect(resPutProd.body.message).to.eq("Registro alterado com sucesso")

                })

            })
        })
    });
});