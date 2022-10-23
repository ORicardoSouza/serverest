/// <reference types= "cypress" />
import * as createLogin from "../../requests/login/post/login.js"
import * as createUser from "../../requests/usuarios/post.usuario";
import * as getUser from "../../requests/usuarios/get.usuario";
import * as putUser from "../../requests/usuarios/put.usuario ";
import * as deleteUser from "../../requests/usuarios/delete.usuario ";
describe('Validando busca de usuários', () => {
    it('Criando usuário com sucesso', () => {
        createUser.postUsuario().should((resCreateUser) => { // Criando novo usuário
            let _id = resCreateUser.body._id
            let authorization = resCreateUser.body.authorization
            cy.log(`${_id}`)
            expect(resCreateUser.status).to.eq(201)

            getUser.getUsuario(`${_id}`).should((resGetUser) => { // Buscando dados do usuário
                expect(resGetUser.status).to.eq(200)
                expect(resGetUser.body._id).to.eq(`${_id}`)
                cy.log(resGetUser.body);

                putUser.putUsuario(`${_id}`).should((resPutUser) => { // Alterando dados do usuário
                    cy.log(resPutUser.body)
                    expect(resPutUser.status).to.eq(200)
                    expect(resPutUser.body.message).to.eq("Registro alterado com sucesso")

                    deleteUser.deleteUsuario(`${_id}`).should((resDeleteUser) => {
                        expect(resDeleteUser.body.message).to.eq("Registro excluído com sucesso")
                        cy.log(resDeleteUser.body.message)

                    })
                })
            })
        })

    })
});