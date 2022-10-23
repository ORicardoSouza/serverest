/// <reference types= "cypress" />
import * as createUser from "../../requests/usuarios/post.usuario";
import * as getusuario from "../../requests/usuarios/get.usuario";

describe('Validando criação de usuários', () => {
    it('Buscando usuário com sucesso', () => {
        createUser.postUsuario().should((resCreateUser) => {
            let _id = resCreateUser.body._id
            cy.log(`${_id}`)
            expect(resCreateUser.status).to.eq(201)
            getusuario.getUsuario(`${_id}`).should((resGetUser) => {
                expect(resGetUser.status).to.eq(200)
                expect(resGetUser.body._id).to.eq(`${_id}`)
            })
        })
    });

    it('Erro ao buscar usuário ', () => {
        let _id = "eyuwyduhiushdiuqwgi"
        getusuario.getUsuarioError(`${_id}`).should((resGetUser) => {
            expect(resGetUser.status).to.eq(400)
            expect(resGetUser.body.message).to.eq("Usuário não encontrado")
        })
    });
});
