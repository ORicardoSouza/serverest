/// <reference types= "cypress" />
import * as createUser from "../../requests/usuarios/post.usuario";
import * as getUser from "../../requests/usuarios/get.usuario";
import * as putUser from "../../requests/usuarios/put.usuario ";
import { faker } from '@faker-js/faker';

describe('Validando alteração de dados dos usuários', () => {
    it('Criando e alterando dadosd de usuário com sucesso', () => {
        createUser.postUsuario().should((resCreateUser) => {
            const _id = resCreateUser.body._id
            cy.log(`${_id}`)
            expect(resCreateUser.status).to.eq(201)

            getUser.getUsuario(`${_id}`).should((resGetUser) => {
                expect(resGetUser.status).to.eq(200)
                expect(resGetUser.body._id).to.eq(`${_id}`)
                cy.log(resGetUser.body.nome);

                putUser.putUsuario(`${_id}`)
                    .should((resPutUser) => {
                        expect(resPutUser.status).to.eq(200)
                        expect(resPutUser.body.message).to.eq("Registro alterado com sucesso")
                    })
            })
        })
    });
    it('status 400 : E-mail já cadastrado', () => {
        createUser.postUsuario().should((resCreateUser) => {
            const _id = resCreateUser.body._id
            expect(resCreateUser.status).to.eq(201)
            cy.api({
                failOnStatusCode: false,
                method: 'PUT',
                url: `usuarios/${_id}`,
                headers: {
                    'Content-Type': 'application/json', 'accept': 'application/json'
                },

                body: {
                    'email': 'Kamron@email.com',
                    'nome': `alterando nome`,
                    'password': `${faker.datatype.number()}`,
                    'administrador': `true`
                }
            }).then((resPutUser) => {
                expect(resPutUser.body.message).to.eq("Este email já está sendo usado")
                expect(resPutUser.status).to.eq(400)
            })
        })
    })
});