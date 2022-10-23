/// <reference types= "cypress" />
import * as createUser from "../../requests/usuarios/post.usuario";

describe('Criação de usuários', () => {
    //beforeEach(() => {
    //    cy.generateFixtureUsuario();
    //});
    it('Criando usuário com sucesso', () => {
    
        createUser.postUsuario()
            .should((response) => {
                cy.log(response.body)
                expect(response.status).to.eql(201)
                expect(response.status).to.be.not.null
            })
    });
})