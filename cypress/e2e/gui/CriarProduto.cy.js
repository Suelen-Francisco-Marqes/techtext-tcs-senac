/*import { faker } from '@faker-js/faker'*/
beforeEach(function() {
  cy.visit('http://localhost/techtext-tcs-senac/Frontend/index.php')
})
describe('Criar Produto', () => {
  beforeEach(() => {
    cy.login()
    cy.get('.detalhes-nome > .field > input').type('admin')
    cy.get(':nth-child(3) > input').type('123456')
    //cy.get('.button > input').click()
  
  })

 

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não preenchido',function(){
    
  cy.visit('http://localhost/techtext-tcs-senac/Frontend/novo_produto.php')
        
    //cy.get('#modelo').type('Bermuda')
    //.should('be.visible')
    //cy.get('#tipoTecido').type('Infantil')
    //.should('be.visible')

    //cy.contains('button', 'Cadastrar').click()

    
  })
})
