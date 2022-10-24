/// <reference types= "cypress" />
import * as createLogin from "../../requests/login/post/login.js"
describe('Validando cenários de logins', () => {
  it('Realizar Login', () => {
    createLogin.createLogin()
      .should((response) => {
        cy.log(JSON.stringify(response))
        expect(response.status).to.eql(200)
        expect(response.status).to.be.not.null
        expect(response.body.message).to.eq('Login realizado com sucesso')
      })
  });

  it('Login com error', () => {
    createLogin.createLoginError()
      .should((response) => {
        expect(response.status).to.eql(401)
        expect(response.status).to.be.not.null
        expect(response.body.message).to.eq('Email e/ou senha inválidos')
      })
  });
});