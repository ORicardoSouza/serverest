/// <reference types= "cypress" />

import * as getUser from "../../requests/usuarios/get.usuarios";
describe('Validando busca de usuários', () => {
  it('Buscar usuarios', () => {
    getUser.getUsuarios()
      .should((response) => {
        expect(response.status).to.eql(200)
        expect(response.status).to.be.not.null
      })
  });
});