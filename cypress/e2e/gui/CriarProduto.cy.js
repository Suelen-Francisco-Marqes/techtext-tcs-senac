/*import { faker } from '@faker-js/faker'*/

describe('Criar Produto', () => {
  beforeEach(() => {
    cy.login()
  })

  beforeEach(function() {
    cy.visit('./novo_produto.php')
})

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não preenchido',function(){
        
    cy.get('#modelo').type('Bermuda')
    .should('be.visible')
    cy.get('#tipoTecido').type('Infantil')
    .should('be.visible')

    cy.contains('button', 'Cadastrar').click()

    
  })
})
